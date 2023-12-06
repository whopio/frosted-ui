/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */
const path = require('path');

module.exports = {
  plugins: [
    require('postcss-import')({
      path: [path.relative(process.cwd(), '../')],
    }),
    require('postcss-nesting'),
    require('./postcss-frosted-ui'),
    require('postcss-custom-media'),
    require('postcss-combine-duplicated-selectors'),
    require('postcss-discard-empty'),
    require('autoprefixer'),
  ],
};
