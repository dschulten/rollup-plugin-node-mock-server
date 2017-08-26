import opn from 'opn';
import mockServer from 'node-mock-server';


export default function nodeMockServer(options) {
  const opts = options || {};
  opts.dirName = opts.dirName || 'mock';
  opts.url = opts.url || 'http://localhost:3001/';

  if (opts.shouldOpenOnStart === undefined) {
    opts.shouldOpenOnStart = true;
  }

  opts.restPath = opts.restPath || `${opts.dirName}/rest`;
  opts.urlPath = opts.urlPath || '/api';
  opts.uiPath = opts.uiPath || '/ui';
  opts.funcPath = opts.funcPath || [
    `${opts.dirName}/func`,
  ];
  opts.expressMiddleware = [
    function (express) {
      return ['/', express.static(`${opts.dirName}/../public`)];
    },
    function (express) {
      return ['/', express.static(`${opts.dirName}/../dist`)];
    },
  ];

  // TODO remove from nms 0.18.0
  process.env.NODE_ENV = 'test';
  mockServer(options);
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
