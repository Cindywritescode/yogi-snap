import { useEffect, useRef, useState } from 'react';
import { getDetector } from '../models/poseDetection';

export default function Camera() {
  const videoRef = useRef();
  const [enableDetection, setEnableDetection] = useState(false);
  const [points, setPoints] = useState([]);
  const [screenshot, setScreenshot] = useState('');

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

  // Effect to do evaluation
  useEffect(() => {
    let timeout = null;
    if (enableDetection) {
      timeout = setInterval(async () => {
        const detector = await getDetector();
        const poses = await detector.estimatePoses(videoRef.current);
        setPoints(poses[0]?.keypoints || []);
      }, 1000);
    }
    return () => {
      clearInterval(timeout);
    };
  }, [enableDetection]);

  const takePicture = () => {
    const canvas = document.createElement('canvas');
    canvas.width = 400;
    canvas.height = 200;
    const ctx = canvas.getContext('2d');
    ctx.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);
    const image = canvas.toDataURL('image/jpeg');
    setScreenshot(image);
  };

  return (
    <>
      <div style={{ position: 'relative' }}>
        <video ref={videoRef}/>
        {points.map((point, i) => <div key={i} style={{
          background: 'red',
          width: '5px',
          height: '5px',
          position: 'absolute',
          top: point.y,
          left: point.x
        }}/>)}
      </div>
      <br/>
      <button onClick={() => videoRef.current?.play()}>Start Camera</button>
      <button onClick={() => videoRef.current?.pause()}>Stop Camera</button>
      <button onClick={() => setEnableDetection(!enableDetection)}>Toggle Detection</button>
      <br/>
      <button onClick={() => takePicture()}>Take Photo</button>
      <br/>
      <img width={1280} height={720} src={screenshot}/>
    </>
  );
}