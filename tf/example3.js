import tf from '@tensorflow/tfjs-node';

// temperature, humidity, wind speed, season (1-4)

const model = tf.sequential();
model.add(tf.layers.dense({ inputShape: [4], units: 32, activation: 'relu' }));
model.add(tf.layers.dense({ units: 2, activation: 'softmax' }));

model.compile({
  optimizer: 'sgd',
  loss: 'categoricalCrossentropy',
  metrics: ['accuracy']
});

model.summary();

const data = tf.tensor([ [10, 40, 5, 3], [-1, 10, 2, 4] ]);
const labels = tf.tensor([ [1, 0], [0, 1] ]);

// Train for 5 epochs with batch size of 32.
model.fit(data, labels, {
  epochs: 5,
  batchSize: 32,
  callbacks: { onBatchEnd: (batch, logs) => console.log('Accuracy', logs.acc) }
}).then(info => {
  console.log('Final accuracy', info.history.acc);
});

const predictSet = tf.tensor([[20, 50, 3, 2]])
const prediction = model.predict(predictSet);
prediction.print();