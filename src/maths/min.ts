export const min = (array: number[]): number | null => {
  if (array.length === 0) return null;
  return Math.min(...array);
};

export default min;
