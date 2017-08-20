import {fork} from 'child_process';
import opn from 'opn';

export default function nodeMockServer(options) {

    options = options || {};
    options.dirName = options.dirName || 'mock';
    options.url = options.url || 'http://localhost:3001/';

    if(options.shouldOpenOnStart === undefined) {
        options.shouldOpenOnStart = true;
    }

    var debug = typeof v8debug === 'object';
    if (debug) {
        process.execArgv.push('--debug=' + (40894));
    }
    const mockServer = fork(options.dirName);

    let running = false;

    return {
        name: 'nodeMockServer',
        ongenerate() {
            if (!running) {
                running = true;
                // TODO: Log which url to visit

                // Open browser
                if (options.shouldOpenOnStart) {
                    opn(options.url)
                }
            }
        }
    }
}
