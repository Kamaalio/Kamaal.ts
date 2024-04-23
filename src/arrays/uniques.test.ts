import uniques from './uniques';

describe('uniques', () => {
  it('returns only unique values in the array', () => {
    const result = uniques([0, 1, 0]);
    expect(result).toEqual([0, 1]);
  });
});
