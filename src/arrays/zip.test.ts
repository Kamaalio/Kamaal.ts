import zip from './zip';

describe('zip', () => {
  it.each([
    {
      input1: [1, 2],
      input2: ['3', '4'],
      expected: [
        [1, '3'],
        [2, '4'],
      ],
    },
    {
      input1: [1, 2, 3],
      input2: ['3', '4'],
      expected: [
        [1, '3'],
        [2, '4'],
      ],
    },
    {
      input1: [1, 2],
      input2: ['3', '4', '5'],
      expected: [
        [1, '3'],
        [2, '4'],
      ],
    },
  ])('zips 2 arrays together unequaled', ({ input1, input2, expected }) => {
    const result = zip(input1, input2);
    expect(result).toEqual(expected);
  });

  it.each([
    {
      input1: [1, 2],
      input2: ['3', '4', '5'],
      expected: [
        [1, '3'],
        [2, '4'],
        [undefined, '5'],
      ],
    },
    {
      input1: [1, 2, 3],
      input2: ['4', '5'],
      expected: [
        [1, '4'],
        [2, '5'],
        [3, undefined],
      ],
    },
    {
      input1: [1, 2],
      input2: ['3', '4'],
      expected: [
        [1, '3'],
        [2, '4'],
      ],
    },
  ])('zips 2 arrays together equalized', ({ input1, input2, expected }) => {
    const result = zip(input1, input2, true);
    expect(result).toEqual(expected);
  });
});
