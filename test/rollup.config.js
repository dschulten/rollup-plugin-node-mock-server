/* eslint-disable comma-dangle */
import nodeMockServer from 'rollup-plugin-node-mock-server';
import livereload from 'rollup-plugin-livereload';

const plugins = [];
if (process.env.BUILD === 'again') {
  plugins.push(
    nodeMockServer({
      url: 'http://localhost:3004/?foo=42',
      shouldOpenOnStart: false,
    }),
    livereload()
  );
} else {
  plugins.push(
    nodeMockServer({url: 'http://localhost:3004/?foo=42'}),
    livereload()
  );
}

export default {
  entry: 'index.js',
  dest: './dist/bundle.js',
  format: 'iife',
  plugins
};
