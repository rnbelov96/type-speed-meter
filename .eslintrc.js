module.exports = {
  env: {
    browser: true,
  },
  parserOptions: {
    ecmaVersion: 2022,
  },
  extends: ['airbnb-base', 'plugin:vue/vue3-recommended'],
  rules: {
    'no-underscore-dangle': ['error', { allowAfterThis: true }],
    'no-new': 0,
    'arrow-parens': 0,
    'max-len': 0,
    'no-console': ['error', { allow: ['error'] }],
    'no-param-reassign': 0,
  },
};
