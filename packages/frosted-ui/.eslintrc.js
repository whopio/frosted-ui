module.exports = {
  root: true,
  extends: ['custom'],
  rules: {
    '@typescript-eslint/no-empty-interface': 'off',
  },
  globals: {
    module: 'readonly',
  },
};
