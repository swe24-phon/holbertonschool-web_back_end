export default function createInt8TypedArray(length, position, value) {
  if (position >= length || position < 0) {
    throw new Error('Position outside range');
  }

  const arr = new Int8Array(length);
  const view = new DataView(arr.buffer);
  view.setInt8(position, value);

  return arr;
}
