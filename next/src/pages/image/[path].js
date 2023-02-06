import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

const Page = () => {
  const {query, isReady } = useRouter();
  const [points, setPoints] = useState({});
  const { path } = query;

  useEffect(() => {
    if (!isReady) return;
    fetch(`/data/${path}.json`)
      .then(response => response.json())
      .then(data => setPoints(data));
  }, [path, isReady]);

  return isReady && (
    <div>
      <div style={{ position: 'relative' }}>
        <img src={`/${path}`}/>
        <div>Points: {points.keypoints?.length || 0}</div>
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
    </div>
  );
};

export default Page;