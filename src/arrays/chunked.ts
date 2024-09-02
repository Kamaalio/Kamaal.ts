export function chunked<Element>(
  array: Element[],
  chunkSize: number
): Element[][] {
  let buffer: Element[] = [];
  const chunks: Element[][] = [];
  array.forEach((item, index) => {
    buffer.push(item);
    if (index % chunkSize !== chunkSize - 1) return;

    chunks.push(buffer);
    buffer = [];
  });

  if (buffer.length > 0) {
    chunks.push(buffer);
  }

  return chunks;
}

export default chunked;
