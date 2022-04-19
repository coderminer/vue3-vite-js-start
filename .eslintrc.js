module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 12,
    parser: '@babel/eslint-parser',
    requireConfigFile: false,
    sourceType: 'module'
  },
  env: {
    browser: true,
    node: true,
    es6: true,
    'vue/setup-compiler-macros': true
  },
  extends: ['plugin:vue/vue3-essential', 'eslint:recommended', 'plugin:prettier/recommended'],
  // add your custom rules here
  rules: {
    'prettier/prettier': 'error',
    'vue/multi-word-component-names': 0
  }
}
