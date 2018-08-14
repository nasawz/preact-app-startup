const typescript = require('rollup-plugin-typescript2');
const resolve = require('rollup-plugin-node-resolve');
const commonjs = require('rollup-plugin-commonjs');
const json = require('rollup-plugin-json');
const globals = require('rollup-plugin-node-globals');
const postcss = require('rollup-plugin-postcss');
// const { uglify }  = require( 'rollup-plugin-uglify');
const packageJSON = require('../package.json');
const path = require('path');

const __basename = path.dirname(__dirname);

const options = {
  bundlePath: path.resolve(__basename, `dist/${packageJSON.name}.js`),
  minifiedBundlePath: path.resolve(__basename, `dist/${packageJSON.name}.min.js`)
};

const licenseText = `/**
 * Copyright (C) ${new Date().getFullYear()} club <club.10086.cn>
 * This source code is licensed under the MIT license found in the LICENSE file in the root directory of this source tree.
 */`;

const defaultPlugins = [
  resolve({
    jsnext: true,
    main: true,
    browser: true
  }),
  postcss({
    extract: true,
    plugins: [require('autoprefixer'), require('postcss-discard-comments')]
  }),
  commonjs({
    include: '../node_modules/**'
  }),
  typescript({
    typescript: require('typescript')
  }),
  globals(),
  json()
];
const inputOptions = {
  input: path.resolve(__basename, 'src/preact-app-startup.tsx'),
  external: ['axios'],
  treeshake: true,
  plugins: defaultPlugins
};
const outputOptions = {
  format: 'umd',
  name: 'APP',
  exports: 'named',
  file: options.bundlePath,
  banner: licenseText,
  globals: {
    axios: 'axios'
  }
};

module.exports = {
  inputOptions,
  outputOptions
};
