module.exports = () => ({
  postcssPlugin: 'postcss-frosted-ui',
  Comment(comment) {
    // Remove all comments from CSS source
    comment.remove();
  },
});

module.exports.postcss = true;
