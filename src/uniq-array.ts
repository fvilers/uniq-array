export function uniqArray<T, K extends keyof T>(array: T[], on?: K): T[] {
  const predicate = (item: T): T | T[K] => (on === undefined ? item : item[on]);
  const source = array.map(predicate);

  return array.filter(
    (value, index) => source.indexOf(predicate(value)) === index
  );
}
