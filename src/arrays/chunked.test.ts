import chunked from './chunked';

describe('chunked', () => {
  it.each([
    { input: [1], size: 0 },
    { input: [1, 2], size: 3 },
  ])('chunks default', ({ input, size }) => {
    const result = chunked(input, size);

    expect(result).toEqual([input]);
  });

  it.each([{ size: 0 }, { size: -1 }])('chunks empty input', ({ size }) => {
    const result = chunked([], size);

    expect(result).toEqual([]);
  });

  it.each([{ size: -3 }, { size: 0 }])(
    'chunks zero or bellow size',
    ({ size }) => {
      const input = [1, 2, 3, 4];

      const result = chunked(input, size);

      expect(result).toEqual([input]);
    }
  );

  it('chunks in to equal pieces', () => {
    const result = chunked([1, 2, 3, 4], 2);

    expect(result).toEqual([
      [1, 2],
      [3, 4],
    ]);
  });

  it('chunks in to uneven pieces', () => {
    const result = chunked([1, 2, 3, 4], 3);

    expect(result).toEqual([[1, 2, 3], [4]]);
  });
});
