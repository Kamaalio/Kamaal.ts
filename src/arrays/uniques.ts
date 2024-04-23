export function uniques<TargetElement>(
  array: TargetElement[]
): TargetElement[] {
  return Array.from(new Set(array));
}

export default uniques;
