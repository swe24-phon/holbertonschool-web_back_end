import hasArrayValues from './7-has_array_values';

test("Create a set using an array of elements. Pass an array containing an element that isn't in resultant set and check if it returns false", () => {
  const set1 = new Set([1, 2, 3, 4, 5]);
  const arr1 = [6, 7, 8];
  expect(hasArrayValues(set1, arr1)).toBe(false);
});
