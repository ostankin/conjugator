import uglify from 'rollup-plugin-uglify';
import { minify } from 'uglify-js';
import { onWarn } from './rollup-onwarn'

var debug = process.env.DEBUG;
var pluginList = [];
if (!debug) {
  pluginList.push(uglify({}, minify));
}
var config = {
  entry: 'src/js/main.js',
  plugins: pluginList,
  onwarn: onWarn,
  dest: 'out/app.js',
  format: 'iife',
  moduleName: 'conjugator'
}
if (debug) {
  config.sourceMap = 'inline'
}
export default config;
