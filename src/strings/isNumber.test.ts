import isNumber from './isNumber';

describe('isNumber', () => {
  it.each([['0'], ['22']])('returns true if number', (input) => {
    const result = isNumber(input);
    expect(result).toEqual(true);
  });

  it.each([[''], ['y']])('returns false when not a number', (input) => {
    const result = isNumber(input);
    expect(result).toEqual(false);
  });
});
