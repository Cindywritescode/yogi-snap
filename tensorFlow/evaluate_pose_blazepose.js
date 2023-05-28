import fs from 'fs';
import * as poseDetection from '@tensorflow-models/pose-detection';
import * as tfn from '@tensorflow/tfjs-node';
import * as tf from '@tensorflow/tfjs';
import '@tensorflow/tfjs-backend-webgl';

// Check enough arguments are present (in terminal)
if (process.argv.length === 2) {
  console.error('Expected at least one argument!');
  process.exit(1);
}

// Get all but remove the first two arguments
const files = process.argv.slice(2);

await tf.setBackend('tensorflow');
// Read all files and process images with Tensorflow format
const images = files.map(path => [
  path,
  tfn.node.decodeJpeg(fs.readFileSync(path))
]);
await tf.setBackend('cpu');

const detectorConfig = {
  runtime: 'tfjs',
  // for static images
  enableSmoothing: false,
  // more accurate (there are 'lite', 'full', 'heavy')
  modelType: 'full'
};
const estimationConfig = { flipHorizontal: true };
const detector = await poseDetection.createDetector(poseDetection.SupportedModels.BlazePose, detectorConfig);

const calculateCentrePoint = (pose) => {
  const xPoints = pose.keypoints?.map((point) => point.x);
  const yPoints = pose.keypoints?.map((point) => point.y);
  const centreX = (Math.max(...xPoints) + Math.min(...xPoints)) / 2;
  const centreY = (Math.max(...yPoints) + Math.min(...yPoints)) / 2;
  return [centreX, centreY];
};

const calculateDegree = (centrePoint, point) => {
  return 180 / Math.PI * Math.atan2(point.y - centrePoint[1], point.x - centrePoint[0]);
};

const calculateError = (base, variant) => {
  return base.keypoints?.map((point, i) => {
    return (
      Math.pow(point.x - variant?.keypoints[i]?.x, 2) +
      Math.pow(point.y - variant?.keypoints[i]?.y, 2)
    ) / 2;
  }).reduce((a, b) => a + b, 0);
};

// Evaluate a single image and store result in path
const evaluate = async (path, image) => {
  detector.reset();
  const base = await detector.estimatePoses(image, estimationConfig, performance.now());
  const [poseA] = await detector.estimatePoses(image, estimationConfig, performance.now());
  const [poseB] = await detector.estimatePoses(image, estimationConfig, performance.now());

  if (base.length === 0 || !poseA || !poseB) {
    return console.error(`Could not process ${path}...`);
  }

  const diffA = calculateError(base[0], poseA);
  const diffB = calculateError(base[0], poseB);
  console.log(`Computed difference for ${path} with base diffA = ${diffA} and diffB = ${diffB}`);

  // Take the first pose, assuming single person
  const detectedPose = diffA < diffB ? poseA : poseB;

  // Print detected pose
  // console.log(JSON.stringify(detectedPose, null, 2));

  const centrePoint = calculateCentrePoint(detectedPose);

  // Save pose in CSV format
  fs.writeFileSync(`${path}.csv`, `image,${detectedPose.keypoints.map(point => point.name).join(',')}\n${path.split('/').slice(-1)},${detectedPose.keypoints.map(point => calculateDegree(centrePoint, point)).join(',')}\n`);
  // Save pose in JSON format
  fs.writeFileSync(`${path}.json`, JSON.stringify(detectedPose));
  console.log(`Evaluated ${path}...`);
};

// Iterate over all images and evaluate each
for (const tuple of images) {
  const [path, image] = tuple;
  await evaluate(path, image);
}

console.log('Completed all evaluation...');