import unflatten from './unflatten';

describe('unflatten', () => {
  it('unflatten the given object', () => {
    const flatObject = {
      'hello.yes': 'true',
      flat: 'yes',
      'nested.array': [1, 2],
      'furthernested.yes.no': false,
    };

    const result = unflatten(flatObject, '.');

    expect(result).toEqual({
      hello: {
        yes: 'true',
      },
      flat: 'yes',
      nested: {
        array: [1, 2],
      },
      furthernested: { yes: { no: false } },
    });
  });
});
