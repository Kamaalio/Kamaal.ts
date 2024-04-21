export const omit = <
  TargetObject extends object,
  Field extends keyof TargetObject,
>(
  object: TargetObject,
  toOmit: Field[] | Field
): Omit<TargetObject, Field> => {
  const fieldsToOmit = (Array.isArray(toOmit) ? toOmit : [toOmit]).map((key) =>
    String(key)
  );
  return Object.entries(object).reduce((acc, [key, value]) => {
    if (fieldsToOmit.includes(key)) {
      return acc;
    }

    return { ...acc, [key]: value };
  }, {}) as Omit<TargetObject, Field>;
};

export default omit;
