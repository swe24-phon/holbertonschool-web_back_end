export const weakMap = new WeakMap();

export default function queryAPI(endpoint) {
  if (WeakMap.has(endpoint)) {
    let callCount = WeakMap.get(endpoint) + 1;
    WeakMap.set(endpoint, callCount);
    if (callCount >= 5) {
      throw new Error('Endpoint load is high');
    } else {
      weakMap.set(endpoint, 1);
    }
  }
}
