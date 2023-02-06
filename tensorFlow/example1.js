import tf from '@tensorflow/tfjs-node'

console.log(tf.getBackend());

const a = tf.tensor([[1, 3, 3 ], [3, 3, 4]]);
a.print();
// rank: defines how many dimensions the tensor contains
console.log('Shape:', a.shape);
// shape: which defines the size of each dimension of the data
console.log('Size of each dimension: ', a.rank);
// dtype: which defines the data type of the tensor.
console.log('Data Type: ', a.dtype);
// Returns the multi dimensional array of values.
console.log('Multi dimensional array:',a.arraySync());
// Returns the flattened data that backs the tensor.
console.log('Flattened data: ' , a.dataSync());

// Computing x2 of all elements
const x = tf.tensor([1, 2, 3, 4 ]);
const y = x.square();
const z = tf.square(x)
y.print()
z.print()

// adding elements of two
const A = tf.tensor([1, 2, 3, 4]);
const B = tf.tensor([10, 20, 30, 40]);
const C = A.add(B);
C.print()

// Memory
const m = tf.tensor([[1, 2], [3, 4]]);
m.dispose();

const n = tf.tensor([[1, 2], [3, 4]]);
const o = tf.tidy(() => {
  const result = n.square().log().neg();
  return result;
});
console.log(tf.memory());