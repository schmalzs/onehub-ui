module.exports = {
  parser: '@typescript-eslint/parser',
  extends: ['@remix-run/eslint-config', '@remix-run/eslint-config/node', 'plugin:@typescript-eslint/recommended', 'plugin:prettier/recommended'],
  plugins: ['@typescript-eslint', 'prettier'],
  rules: {
    '@typescript-eslint/no-unused-vars': ['error', { ignoreRestSiblings: true }],
    'prettier/prettier': ['error'],
  },
};
