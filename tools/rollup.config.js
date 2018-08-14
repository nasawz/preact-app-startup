const { inputOptions, outputOptions } = require('./config');
let rollupConfig = {};
rollupConfig = Object.assign(rollupConfig, inputOptions('dist'));
rollupConfig.output = outputOptions('dist');
export default [rollupConfig];
