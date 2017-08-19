import nodeMockServer from 'rollup-plugin-node-mock-server'

export default {
    entry: 'entry.js',
    dest: './dist/dest.js',
    format: 'iife',
    plugins: [
        nodeMockServer(),
    ]
}