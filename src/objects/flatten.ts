function _flatten<Result extends object>(
  obj: Record<string, unknown>,
  recursiveContext?: { parentKey: string; result: Result }
): Result {
  const initialResult = recursiveContext?.result ?? ({} as unknown as Result);
  const parentKey = recursiveContext?.parentKey;

  return Object.entries(obj).reduce<Result>((acc, [key, value]) => {
    const newKey = parentKey != null ? `${parentKey}.${key}` : key;
    if (typeof value !== 'object') return { ...acc, [newKey]: value };
    if (Array.isArray(value)) return { ...acc, [newKey]: value };

    return _flatten(value as Record<string, unknown>, {
      parentKey: newKey,
      result: acc,
    });
  }, initialResult);
}

function flatten<Result extends object>(obj: Record<string, unknown>): Result {
  return _flatten(obj);
}

export default flatten;
