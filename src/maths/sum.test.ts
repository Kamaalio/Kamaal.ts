import sum from './sum';

describe('sum', () => {
  it('sums numbers up', () => {
    const result = sum([1, 2, 3]);
    expect(result).toEqual(6);
  });

  it('defaults to 0 when no values are passed in', () => {
    const result = sum([]);
    expect(result).toEqual(0);
  });
});
