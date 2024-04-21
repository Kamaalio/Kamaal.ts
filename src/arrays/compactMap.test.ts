import compactMap from './compactMap';

describe('compactMap', () => {
  it('maps and filters undefined values', () => {
    const result = compactMap([1, 2], (value) => {
      if (value === 1) return null;
      return String(value);
    });
    expect(result).toEqual(['2']);
  });
});
