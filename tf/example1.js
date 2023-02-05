import tf from '@tensorflow/tfjs-node'

console.log(tf.getBackend());

const a = tf.tensor([[1, 3, 3 ], [3, 3, 4], [2, 5, 6 ]]);
console.log('shape:', a.shape);
a.print();