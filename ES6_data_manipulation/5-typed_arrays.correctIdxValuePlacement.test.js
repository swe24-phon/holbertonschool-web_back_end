import createInt8TypedArray from './5-typed_arrays';

test('createInt8TypedArray returns 5 when getting the 0th index', () => {
  let array = createInt8TypedArray(10, 0, 5);
  const view = new DataView(array.buffer);
  expect(view.getInt8(0)).toBe(5);
});
