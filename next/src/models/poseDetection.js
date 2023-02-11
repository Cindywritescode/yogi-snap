import * as poseDetection from '@tensorflow-models/pose-detection';
import '@tensorflow/tfjs-backend-webgl';

const detectorConfig = {
  architecture: 'MobileNetV1',
  modelType: poseDetection.movenet.modelType.MULTIPOSE_LIGHTNING,
  enableTracking: true,
  trackerType: poseDetection.TrackerType.BoundingBox
};

export const getDetector = async () => {
  return await poseDetection.createDetector(
    poseDetection.SupportedModels.MoveNet,
    detectorConfig
  );
};