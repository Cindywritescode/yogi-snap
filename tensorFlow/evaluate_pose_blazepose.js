import fs from 'fs';
import * as poseDetection from '@tensorflow-models/pose-detection';
import * as tf from '@tensorflow/tfjs'
import * as tfn from '@tensorflow/tfjs-node';
import '@tensorflow/tfjs-backend-webgl';

const path = 'downdog00000001.jpg'

await tf.setBackend('tensorflow');
const buffer = fs.readFileSync(`../next/public/${path}`);
const image = tfn.node.decodeJpeg(buffer);
await tf.setBackend('cpu')

const detectorConfig = {
  runtime: 'tfjs',
  enableSmoothing: true,
  modelType: 'full'
};
const estimationConfig = { flipHorizontal: true };
const timestamp = performance.now();
const detector = await poseDetection.createDetector(poseDetection.SupportedModels.BlazePose, detectorConfig);


const poses = await detector.estimatePoses(image, estimationConfig, timestamp);
console.log(JSON.stringify(poses, null, 2));

fs.writeFileSync(`../next/public/data/${path}.json`, JSON.stringify(poses[0]));