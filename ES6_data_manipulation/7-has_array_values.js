export default function hasArrayValues(sett, arr) {
  if (!Array.isArray(arr) || !(sett instanceof Set)) {
    throw new Error('Input is not an array');
  }
  return arr.every((item) => sett.has(item));
}
