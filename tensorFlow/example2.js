import tf from '@tensorflow/tfjs-node';

const model = tf.sequential();
model.add(tf.layers.dense({ inputShape: [784], units: 32, activation: 'relu' }));
model.add(tf.layers.dense({ units: 10, activation: 'softmax' }));

model.summary();

model.compile({
  optimizer: 'sgd',
  loss: 'categoricalCrossentropy',
  metrics: ['accuracy']
});

const data = tf.randomNormal([100, 784]);
const labels = tf.randomUniform([100, 10]);

// Train for 5 epochs with batch size of 32.
model.fit(data, labels, {
  epochs: 5,
  batchSize: 32,
  callbacks: { onBatchEnd: (batch, logs) => console.log('Accuracy', logs.acc) }
}).then(info => {
  console.log('Final accuracy', info.history.acc);
});

const predictSet = tf.randomNormal([3, 784])
const prediction = model.predict(predictSet);
prediction.print();