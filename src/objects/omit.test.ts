import omit from './omit';

describe('omit', () => {
  it('omits with a single value', () => {
    const result = omit({ yes: true, no: 'false' }, 'yes');
    expect(result).toEqual({ no: 'false' });
  });

  it('omits with multiple values', () => {
    const result = omit({ yes: true, 0: 'false' }, [0]);
    expect(result).toEqual({ yes: true });
  });

  it('does not omit when array is empty', () => {
    const originalObject = { yes: true, no: 'false' };
    const result = omit(originalObject, []);
    expect(result).toEqual(originalObject);
  });

  it('does not omit with keys that are not in the object', () => {
    // @ts-expect-error using an non existent property for testing
    const result = omit({ yes: true, no: 'false' }, ['no', 'maybe']);
    expect(result).toEqual({ yes: true });
  });

  it('does not omit non existent fields', () => {
    const originalObject = { yes: true, no: false };
    // @ts-expect-error using an non existent property for testing
    expect(omit(originalObject, 'maybe')).toEqual(originalObject);
  });
});
