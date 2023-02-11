import { useEffect, useRef } from 'react';

export default function Runcamera() {
  const videoRef = useRef();
  const constraints = {
    video: { width: 300 },
    audio: false
  };

  useEffect(() => {
    getVideoStream();
  }, [videoRef]
  );

  const getVideoStream = () => {
    navigator.mediaDevices
      .getUserMedia(constraints)
      .then((mediaStream) => {
        const video = videoRef.current;
        video.srcObject = mediaStream;
        video.play();
      })
      .catch((err) => {
        console.error('error', err);
      });
  };

  const stopVideoStream = () => {
    const stream = videoRef.current?.srcObject
    stream.getTracks().forEach(track => track.stop())
  }


  return <div>
    <video ref={videoRef}/> <br/>
    <button onClick={getVideoStream}>Run Camera</button>
    <button onClick={stopVideoStream}>Stop Camera</button>
    <button>Take a Photo</button>
  </div>;
}