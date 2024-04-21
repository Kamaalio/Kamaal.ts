export const isNumber = (value: string): boolean => {
  if (value.length === 0) return false;
  return !Number.isNaN(Number(value));
};

export default isNumber;
