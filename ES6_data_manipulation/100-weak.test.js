import { weakMap, queryAPI } from './100-weak.js';

describe('queryAPI', () => {
  it('queryAPI is implemented correctly', () => {
    const endpoint1 = { protocol: 'http:', name: 'test1' };

    expect(weakMap.has(endpoint1)).toBe(false);

    queryAPI(endpoint1);
    expect(weakMap.has(endpoint1)).toBe(true);
    expect(weakMap.get(endpoint1)).toBe(1);

    queryAPI(endpoint1);
    expect(weakMap.get(endpoint1)).toBe(2);

    expect(() => {
      queryAPI(endpoint1);
      queryAPI(endpoint1);
      queryAPI(endpoint1);
      queryAPI(endpoint1);
    }).toThrow('Endpoint load is high');
  });
});
