import opn from 'opn';
import mockServer from 'node-mock-server';
import {parse} from 'url';
import fs from 'fs';
import chip from 'chip';

const log = chip();


export default function nodeMockServer(options) {
  const opts = options || {};
  opts.dirName = opts.dirName || 'mock';
  opts.restPath = opts.restPath || `${opts.dirName}/rest`;
  opts.urlPath = opts.urlPath || '/api';
  opts.uiPath = opts.uiPath || '/ui';
  opts.funcPath = opts.funcPath || [
    `${opts.dirName}/func`,
  ];
  // TODO https
  if (opts.url) {
    const url = parse(opts.url);
    opts.port = url.port || 3001;
    opts.urlBase = `${url.protocol}//${url.host}`;
  } else {
    opts.port = opts.port || 3001;
    opts.urlBase = `http://localhost:${opts.port}`;
    opts.url = `${opts.urlBase}/`;
  }

  if (opts.shouldOpenOnStart === undefined) {
    opts.shouldOpenOnStart = true;
  }

  if (!opts.expressMiddleware) {
    opts.contentBase = opts.contentBase || ['public', 'dist'];
    opts.expressMiddleware = [];
    if (Array.isArray(opts.contentBase)) {
      for (let i = 0; i < opts.contentBase.length; i++) {
        opts.expressMiddleware.push(express => ['/', express.static(`${opts.dirName}/../${opts.contentBase[i]}`)]);
      }
    }
  }

  if (!opts.shouldOpenOnStart) {
    // TODO remove from nms 0.18.0
    process.env.NODE_ENV = 'test';
  }

  if (!fs.existsSync(opts.dirName)) {
    fs.mkdirSync(opts.dirName);
    log(`wrote directory ${opts.dirName}`);
  }
  mockServer(opts);
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
