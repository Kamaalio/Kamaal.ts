import type { NonEmptyArray } from '../types/arrays.js';
import type { Character } from '../types/strings.js';

function setNestedValue<Result extends object>(
  obj: Result,
  keys: NonEmptyArray<string>,
  value: unknown
): Result {
  const [first, ...rest] = keys;
  if (rest.length === 0) return { ...obj, [first]: value };

  const nestedObject = (obj as Record<string, unknown>)[first] ?? {};

  return {
    ...obj,
    [first]: setNestedValue(nestedObject, rest as NonEmptyArray<string>, value),
  };
}

export function unflatten<Result extends object, Delimiter extends string>(
  data: object,
  delimiter: Character<Delimiter>
): Result {
  const initialResult = {} as unknown as Result;

  return Object.entries(data).reduce<Result>((acc, [key, value]) => {
    const keys = key.split(delimiter) as NonEmptyArray<string>;

    return setNestedValue(acc, keys, value);
  }, initialResult);
}

export default unflatten;
