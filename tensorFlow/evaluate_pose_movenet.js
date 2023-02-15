import fs from 'fs';
import * as poseDetection from '@tensorflow-models/pose-detection';
import * as tfn from '@tensorflow/tfjs-node';
import '@tensorflow/tfjs-backend-wasm';

const detectorConfig = {
  modelType: poseDetection.movenet.modelType.MULTIPOSE_LIGHTNING,
  enableTracking: true,
  trackerType: poseDetection.TrackerType.BoundingBox
};
const detector = await poseDetection.createDetector(poseDetection.SupportedModels.MoveNet, detectorConfig);

const buffer = fs.readFileSync('../next/public/warrior/00000000.jpg');
const image = tfn.node.decodeJpeg(buffer);
const poses = await detector.estimatePoses(image);
console.log(JSON.stringify(poses, null, 2));