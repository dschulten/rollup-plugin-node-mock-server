/* eslint-disable comma-dangle */
import nodeMockServer from 'rollup-plugin-node-mock-server';
import livereload from 'rollup-plugin-livereload';
import buble from 'rollup-plugin-buble';

const plugins = [buble()];

const open = (process.env.BUILD !== 'again');

plugins.push(
  nodeMockServer({
    url: 'http://localhost:3004/?foo=42',
    shouldOpenOnStart: open,
  }),
  livereload({watch: 'dist'})
);

export default {
  entry: 'index.js',
  dest: './dist/bundle.js',
  format: 'iife',
  plugins
};
