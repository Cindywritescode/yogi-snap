import React, { useEffect, useRef, useState } from 'react';
import { yogisnapClasses, yogisnapLoadModel, yogisnapPredict } from '../models/yogisnapModel';

const yogisnapEvaluationLoop = async (videoRef, setPredicted) => {
  const model = await yogisnapLoadModel(setPredicted);
  setInterval(() => {
    yogisnapPredict(videoRef.current, model, setPredicted);
  }, 10000);
};

export default function Classification() {
  const videoRef = useRef()
  const [predicted, setPredicted] = useState(null);

  // Effect to setup camera
  useEffect(() => {
    const initialize = async () => {
      const mediaStream = await navigator.mediaDevices.getUserMedia({
        video: { width: 720, height: 480 }
      });
      videoRef.current.srcObject = mediaStream;
    };
    initialize();
  }, [videoRef]);

  useEffect(() => {
    yogisnapEvaluationLoop(videoRef, setPredicted);
  }, []);

  return (
    <div>
      <video autoPlay ref={videoRef}/>
      {/*<img id="picture" src="/plank/00000000.jpg"/>*/}
      {predicted && <p>Predicted: {yogisnapClasses[predicted]}</p>}
    </div>
  );
}
