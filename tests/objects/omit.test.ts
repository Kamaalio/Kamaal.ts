import { omit } from '../../src/objects';

describe('omit', () => {
  it('omits', () => {
    expect(omit({ yes: true, no: false }, 'yes')).toEqual({ no: false });
  });

  it('does not omit non existent fields', () => {
    const originalObject = { yes: true, no: false };
    // @ts-expect-error using an non existent property for testing
    expect(omit(originalObject, 'maybe')).toEqual(originalObject);
  });
});
