export function uniqArray<T, K extends keyof T>(array: T[], on?: K): T[] {
  const uniq = new Array<T>();
  const predicate = (item: T): T | T[K] => (on === undefined ? item : item[on]);

  for (const item of array) {
    if (uniq.find((x) => predicate(x) === predicate(item)) === undefined) {
      uniq.push(item);
    }
  }

  return uniq;
}
