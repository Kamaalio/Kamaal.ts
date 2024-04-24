import { exec } from 'node:child_process';
import type { ExecException, ExecOptions } from 'node:child_process';

import { Err, Ok } from '@thames/monads';
import type { Result } from '@thames/monads';

async function internalAsyncExec(
  command: string,
  options?: ExecOptions
): Promise<string> {
  return await new Promise((resolve, reject) => {
    exec(command, options ?? {}, (error, stdout, stderr) => {
      if (error != null) {
        reject(error);
        return;
      }

      if (stderr !== '') {
        reject(stderr);
        return;
      }

      resolve(stdout);
    });
  });
}

export async function asyncExec(
  command: string,
  commandWorkingDirectory?: string
): Promise<Result<string, ExecException | string>> {
  let result: Awaited<ReturnType<typeof internalAsyncExec>>;
  try {
    result = await internalAsyncExec(command, { cwd: commandWorkingDirectory });
  } catch (error) {
    return Err(error as ExecException | string);
  }

  return Ok(result);
}

export default asyncExec;
