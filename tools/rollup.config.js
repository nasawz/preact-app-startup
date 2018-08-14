const { inputOptions, outputOptions } = require('./config');
const packageJSON = require('../package.json');
const path = require('path');
// import { uglify } from 'rollup-plugin-uglify';

const __basename = path.dirname(__dirname);

const options = {
  bundlePath: path.resolve(__basename, `dist/${packageJSON.name}.js`),
  minifiedBundlePath: path.resolve(__basename, `dist/${packageJSON.name}.min.js`)
};
// rollupConfig.push(
//   createBundleConfig(options.minifiedBundlePath, {
//     output: {
//       banner: licenseText
//     },
//     plugins: [...defaultPlugins, uglify()]
//   })
// );

let rollupConfig = {};
rollupConfig = Object.assign(rollupConfig, inputOptions);
rollupConfig = Object.assign(rollupConfig, outputOptions);
rollupConfig = Object.assign(rollupConfig, {
  output: {
    file: options.bundlePath,
    format: 'umd'
  }
});

export default [rollupConfig];
