import fs from 'node:fs/promises';
import { performance } from 'node:perf_hooks';

import packageJSON from '../package.json';
import omit from '../src/objects/omit';

async function main() {
  const startTime = performance.now();
  const modifiedPackageJSON = modifyPackageJSON();
  await fs.writeFile(
    'dist/package.json',
    JSON.stringify(modifiedPackageJSON, null, 2)
  );
  const endTime = performance.now();
  console.log(`Finished in ${(endTime - startTime).toFixed(4)} milliseconds`);
}

function modifyPackageJSON() {
  const argumentVersion = process.argv[2];
  const version =
    argumentVersion && argumentVersion !== 'null'
      ? argumentVersion
      : packageJSON.version;
  return omit(
    {
      ...packageJSON,
      main: 'index.js',
      typings: 'index.d.ts',
      version,
    },
    'files'
  );
}

main();
