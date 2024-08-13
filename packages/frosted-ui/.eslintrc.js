const { plugin } = require('postcss');

module.exports = {
  root: true,
  extends: ['custom'],
  rules: {
    '@typescript-eslint/no-empty-interface': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
  },
  globals: {
    module: 'readonly',
  },
  plugins: ['react-hooks'],
};
