import { fork } from 'child_process';
import opn from 'opn';

export default function nodeMockServer(options) {
  const opts = options || {};
  opts.dirName = opts.dirName || 'mock';
  opts.url = opts.url || 'http://localhost:3001/';

  if (opts.shouldOpenOnStart === undefined) {
    opts.shouldOpenOnStart = true;
  }

  const debug = typeof v8debug === 'object';
  if (debug) {
    process.execArgv.push(`--debug=${40894}`);
  }
  fork(opts.dirName);

  let running = false;

  return {
    name: 'nodeMockServer',
    ongenerate() {
      if (!running) {
        running = true;
        // TODO: Log which url to visit

        // Open browser
        if (opts.shouldOpenOnStart) {
          opn(opts.url);
        }
      }
    },
  };
}
