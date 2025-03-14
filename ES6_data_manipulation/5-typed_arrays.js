export default function createInt8TypedArray(length, position, value) {
  const arr = new Int8Array(length);
  const view = new DataView(arr.buffer);
  view.setInt8(position, value);
  return arr;
}
