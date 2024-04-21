export const compactMap = <TargetElement, TransformedElement>(
  array: TargetElement[],
  transformer: (value: TargetElement) => TransformedElement | null | undefined
): TransformedElement[] => {
  const newArray: TransformedElement[] = [];
  array.forEach((item) => {
    const transformedItem = transformer(item);
    if (transformedItem == null) {
      return;
    }

    newArray.push(transformedItem);
  });
  return newArray;
};

export default compactMap;
