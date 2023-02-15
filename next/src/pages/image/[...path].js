import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

const Page = () => {
  const { query, isReady } = useRouter();
  const [points, setPoints] = useState({});
  const [centre, setCentre] = useState([0, 0]);
  const { path } = query;
  const fullPath = path?.join('/');

  useEffect(() => {
    if (!isReady) return;
    fetch(`/data/${fullPath}.json`)
      .then(response => response.json())
      .then(data => setPoints(data));
  }, [path, isReady]);

  useEffect(() => {
    if (!points.keypoints) return;
    const xPoints = points.keypoints?.map((point) => point.x);
    const yPoints = points.keypoints?.map((point) => point.y);
    const centreX = (Math.max(...xPoints) + Math.min(...xPoints)) / 2;
    const centreY = (Math.max(...yPoints) + Math.min(...yPoints)) / 2;
    setCentre([centreX, centreY]);
  }, [points]);


  return isReady && (
    <div>
      <div style={{ position: 'relative' }}>
        <img src={`/${fullPath}`} alt=''/>
        <div>Points: {points.keypoints?.length || 0} </div>
        <div
          style={{
            position: 'absolute',
            top: centre[1],
            left: centre[0],
            width: '6px',
            height: '6px',
            borderRadius: '50px',
            background: 'blue'
          }}/>
        {points.keypoints?.map((point, i) =>
          <div
            key={i}
            style={{
              position: 'absolute',
              top: point.y,
              left: point.x,
              width: '5px',
              height: '5px',
              background: 'red'
            }}/>
        )}

      </div>
      <table style={{ border: '1px solid black' }}>
        <tr>
          <th>Point Name</th>
          <th>Degree</th>
        </tr>
        {points.keypoints?.map((point, i) =>
          <tr key={i}>
            <td>{point.name}</td>
            <td>{180 / Math.PI * Math.atan2(point.y - centre[1], point.x - centre[0])}</td>
          </tr>
        )}

      </table>
    </div>
  );
};

export default Page;