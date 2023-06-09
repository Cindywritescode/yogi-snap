import React, { useEffect, useRef, useState } from 'react';
import { yogisnapClasses, yogisnapLoadModel, yogisnapPredict } from '../models/yogisnapModel';
import { Container } from '../components/Container';

const yogisnapEvaluationLoop = async (videoRef, setPredicted) => {
  const model = await yogisnapLoadModel(setPredicted);
  setInterval(() => {
    yogisnapPredict(videoRef.current, model, setPredicted);
  }, 10000);
};

export default function Classification() {
  const videoRef = useRef();
  const [predicted, setPredicted] = useState(null);

  // Effect to setup camera
  useEffect(() => {
    const initialize = async () => {
      const mediaStream = await navigator.mediaDevices.getUserMedia({
        video: { width: 1280, height: 720 }
      });
      videoRef.current.srcObject = mediaStream;
    };
    initialize();
  }, [videoRef]);

  useEffect(() => {
    yogisnapEvaluationLoop(videoRef, setPredicted);
  }, []);

  return (
    <Container>
      <div className="text-center text-2xl font-medium pt-4 pb-4">
        {predicted && <p>Predicted: {yogisnapClasses[predicted]}</p>}
      </div>
      <div className="border border-gray-200 bg-white px-4 py-5 sm:px-6">
        <video autoPlay ref={videoRef}/>
      </div>
    </Container>
  );
}
