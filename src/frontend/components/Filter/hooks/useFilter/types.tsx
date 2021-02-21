export type Filter = { key: string; value: string };

export type UseFilterReturn<T> = [
  T[],
  (checked: boolean, value: string, filterByKey: string) => void
];
