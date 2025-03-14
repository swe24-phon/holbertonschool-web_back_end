export default function cleanSet(sett, startString) {
  if (!(sett instanceof Set)) {
    throw new Error('Input is not a set');
  }
  if (typeof startString !== 'string') {
    throw new Error('Start string is not a string');
  }
  const cleanedSet = new Set();
  sett.forEach((item) => {
    if (typeof item === 'string' && item.startsWith(startString)) {
      cleanedSet.add(item.slice(startString.length));
    }
  });
  return Array.from(cleanedSet).join('-');
}
