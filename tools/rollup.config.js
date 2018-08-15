const { inputOptions, outputOptions } = require('./config');
let rollupConfig = {};

console.log(process.env.NODE_ENV);

const type = process.env.NODE_ENV == 'production' ? 'dist' : 'dev';

rollupConfig = Object.assign(rollupConfig, inputOptions(type));
rollupConfig.output = outputOptions(type);
export default [rollupConfig];
