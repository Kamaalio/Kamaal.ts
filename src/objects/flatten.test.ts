import flatten from './flatten';

describe('flatten', () => {
  it('flattens the given object', () => {
    const nestedObject = {
      hello: {
        yes: 'true',
      },
      flat: 'yes',
      nested: {
        array: [1, 2],
      },
    };

    const result = flatten(nestedObject);

    expect(result).toEqual({
      'hello.yes': 'true',
      flat: 'yes',
      'nested.array': [1, 2],
    });
  });
});
