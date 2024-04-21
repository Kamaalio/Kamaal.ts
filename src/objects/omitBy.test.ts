import omitBy from './omitBy';

describe('omitBy', () => {
  it('omitBy given predicate', () => {
    const result = omitBy({ yes: true, no: false }, (value) => value);
    expect(result).toEqual({ no: false });
  });
});
