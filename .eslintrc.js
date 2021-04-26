module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
  },
  plugins: [
    'react',
    'html'
  ],
  rules: {
    'semi': ['error', 'never'],
    'react/react-in-jsx-scope': 'off',
    'react/jsx-filename-extension': 'off',
    'no-undef': 'off',
    'no-unused-vars': 'off',
    'react/prop-types': 'off',
    'prefer-template': 'off',
    'padded-blocks': 'off',
    'arrow-parens': 'off',
    'no-else-return': 'off',
    'no-nested-ternary': 'off',
  },
};
