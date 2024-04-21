import min from './min';

describe('min', () => {
  it('returns the minimum number', () => {
    const result = min([2, 1, 3]);
    expect(result).toEqual(1);
  });

  it('returns 1 of the minimum number', () => {
    const result = min([2, 1, 1]);
    expect(result).toEqual(1);
  });

  it('defaults to null when no values are passed in', () => {
    const result = min([]);
    expect(result).toBeNull();
  });
});
