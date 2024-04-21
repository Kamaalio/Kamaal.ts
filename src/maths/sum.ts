export const sum = (numbers: number[]): number => {
  return numbers.reduce((sum, item) => sum + item, 0);
};

export default sum;
