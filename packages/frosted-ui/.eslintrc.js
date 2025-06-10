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
  overrides: [
    {
      // Disable react-hooks/rules-of-hooks for Storybook story files
      // as using hooks in render functions is acceptable for stories
      files: ['*.stories.tsx', '*.stories.ts'],
      rules: {
        'react-hooks/rules-of-hooks': 'off',
      },
    },
  ],
};
