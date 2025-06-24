import type { Entry } from '../types/index.js';

export function toEntries<Target extends object>(
  object: Target
): Array<Entry<Target>> {
  return Object.entries(object) as Array<Entry<Target>>;
}

export default toEntries;
