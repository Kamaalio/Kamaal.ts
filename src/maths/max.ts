export const max = (array: number[]): number | null => {
  if (array.length === 0) return null;
  return Math.max(...array);
};

export default max;
