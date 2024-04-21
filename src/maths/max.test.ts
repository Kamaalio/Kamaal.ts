import max from './max';

describe('min', () => {
  it('returns the maximum number', () => {
    const result = max([2, 1, 3]);
    expect(result).toEqual(3);
  });

  it('returns 1 of the maximum number', () => {
    const result = max([2, 1, 2]);
    expect(result).toEqual(2);
  });

  it('defaults to null when no values are passed in', () => {
    const result = max([]);
    expect(result).toBeNull();
  });
});
