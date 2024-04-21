export const omit = <
  TargetObject extends object,
  Fields extends Exclude<keyof TargetObject, symbol | number>,
>(
  object: TargetObject,
  fieldsToOmit: Fields
): Omit<TargetObject, typeof fieldsToOmit> => {
  return Object.entries(object).reduce((acc, [key, value]) => {
    if (fieldsToOmit.includes(key)) {
      return acc;
    }

    return { ...acc, [key]: value };
  }, {}) as Omit<TargetObject, typeof fieldsToOmit>;
};

export default omit;
