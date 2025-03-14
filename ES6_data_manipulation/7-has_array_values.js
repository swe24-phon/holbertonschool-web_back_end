export default function hasArrayValues(sett, arr) {
  return sett.some((item) => arr.includes(item));
}
