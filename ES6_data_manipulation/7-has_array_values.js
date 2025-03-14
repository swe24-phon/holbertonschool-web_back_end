export default function hasArrayValues(sett, arr) {
  if (!Array.isArray(arr) || !Array.isArray(sett)) {
    throw new Error('Input is not an array');
  }
  return sett.some((item) => arr.includes(item));
}
