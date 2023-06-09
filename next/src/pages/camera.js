import { useEffect, useRef, useState } from 'react';
import { getDetector } from '../models/poseDetection';
import { Button } from '../components/Button';
import { Container } from '../components/Container';

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
    canvas.width = 1280;
    canvas.height = 780;
    const ctx = canvas.getContext('2d');
    ctx.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);
    const image = canvas.toDataURL('image/jpeg');
    setScreenshot(image);
  };

  return (
    <Container>
      <div className="flex justify-center pb-4">
        <div className="m-auto grid-cols-4 gap-4">
          <Button onClick={() => videoRef.current?.play()}>Start Camera</Button>
          <Button onClick={() => videoRef.current?.pause()}>Stop Camera</Button>
          <Button onClick={() => setEnableDetection(!enableDetection)}>Toggle Detection</Button>
          <Button onClick={() => takePicture()}>Take Photo</Button>
        </div>
      </div>
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

      <br/>
      <img width={1280} height={720} src={screenshot}/>
    </Container>
  );
}