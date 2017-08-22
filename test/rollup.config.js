import nodeMockServer from 'rollup-plugin-node-mock-server';
import livereload from 'rollup-plugin-livereload';

export default {
  entry: 'index.js',
  dest: './dist/bundle.js',
  format: 'iife',
  plugins: [
    nodeMockServer({shouldOpenOnStart: true}),
    livereload(),
  ],
};
