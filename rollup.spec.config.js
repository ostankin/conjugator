import { onWarn } from './rollup-onwarn'

export default {
  entry: 'spec/test-setup.js',
  onwarn: onWarn,
  dest: 'spec/out/conjugator.js',
  format: 'cjs'
};
