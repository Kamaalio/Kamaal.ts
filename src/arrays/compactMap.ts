export const compactMap = <TargetElement, TransformedElement>(
  array: TargetElement[],
  transformer: (
    value: TargetElement,
    index: number
  ) => TransformedElement | null | undefined
): TransformedElement[] => {
  const newArray: TransformedElement[] = [];
  array.forEach((item, index) => {
    const transformedItem = transformer(item, index);
    if (transformedItem == null) {
      return;
    }

    newArray.push(transformedItem);
  });
  return newArray;
};

export default compactMap;
