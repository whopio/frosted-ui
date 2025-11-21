/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */
const path = require('path');
const removeP3 = require('./postcss-remove-p3');

module.exports = {
  plugins: [
    require('postcss-import')({
      path: [path.relative(process.cwd(), '../')],
    }),
    require('postcss-nesting'),
    require('./postcss-frosted-ui'),
    require('postcss-custom-media'),
    require('postcss-combine-duplicated-selectors'),
    removeP3(),
    require('postcss-discard-empty'),
    require('autoprefixer'),
  ],
};
