import { loadGraphModel } from '@tensorflow/tfjs-converter';
import * as tf from '@tensorflow/tfjs';

const MODEL_URL = '/web_model/model.json';
export const yogisnapClasses = ['Downdog', 'Goddess', 'Plank', 'Tree', 'Warrior2', 'Unknown'];

export const yogisnapLoadModel = async () => {
  return await loadGraphModel(MODEL_URL);
};

export const yogisnapPredict = async (videoSource, model, setPredicted) => {
  // const source = document.getElementById('picture');
  const image = tf.browser.fromPixels(videoSource);
  const input = tf.image.resizeBilinear(image, [180, 180]);
  const batch = input.reshape([1, 180, 180, 3]);
  const result = model.execute(batch);
  const scores = tf.softmax(result);
  const confidence = tf.max(scores.dataSync());
  const predicted = tf.argMax(scores.dataSync()).dataSync();
  console.log(`(confidence ${100 * Number(confidence.dataSync()).toFixed(2)}%) Predicted ${yogisnapClasses[predicted]}`);
  // if (confidence.dataSync() > 70) {
  setPredicted(predicted);
  // }
};