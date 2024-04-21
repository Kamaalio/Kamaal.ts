export const omitBy = <TargetObject extends object>(
  object: TargetObject,
  predicate: (value: TargetObject[keyof TargetObject]) => boolean
): TargetObject => {
  return Object.entries(object).reduce((acc, [key, value]) => {
    if (predicate(value as TargetObject[keyof TargetObject])) {
      return acc;
    }

    return { ...acc, [key]: value };
  }, {}) as TargetObject;
};

export default omitBy;
