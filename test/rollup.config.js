import nodeMockServer from 'rollup-plugin-node-mock-server';

export default {
  entry: 'index.js',
  dest: './dist/bundle.js',
  format: 'iife',
  plugins: [
    nodeMockServer({shouldOpenOnStart: false}),
  ],
};
