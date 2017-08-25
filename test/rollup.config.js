import nodeMockServer from 'rollup-plugin-node-mock-server';
import livereload from 'rollup-plugin-livereload';

const plugins = [];
if (process.env.BUILD === 'development') {
  plugins.push(
    nodeMockServer(),
    livereload()
  );
}
if (process.env.BUILD === 'again') {
  plugins.push(
    nodeMockServer({shouldOpenOnStart: false}),
    livereload()
  );
}

export default {
  entry: 'index.js',
  dest: './dist/bundle.js',
  format: 'iife',
  plugins
};
