import buble from 'rollup-plugin-buble';

const pkg = require('./package.json');

export default {
  entry: 'src/index.js',
  moduleName: 'nodeMockServer',
  targets: [
    {dest: pkg.main, format: 'cjs'},
    {dest: pkg.module, format: 'es'},
  ],

  plugins: [
    buble(),
  ],
  sourceMap: true,
  external: ['node-mock-server', 'opn', 'url', 'fs', 'chip'],
};
