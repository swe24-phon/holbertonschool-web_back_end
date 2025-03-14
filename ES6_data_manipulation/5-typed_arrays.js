export default function createInt8TypedArray(length, position, value) {
  let arr = new Int8Array(length);
  view = [position, value];
  for (let i = 0; i < length; i++) {
    arr[i] = view[i];
    return arr;
  }
}
