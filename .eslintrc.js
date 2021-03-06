module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended'
  ],
  // add your custom rules here
  rules: {
    'nuxt/no-cjs-in-config': 'off',
    'indent': ['error', 2], // 2个空格缩进
    'no-console': 'off',
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    // 关闭语句强制分号结尾
    'semi': [0],
    //空行最多不能超过100行
    'no-multiple-empty-lines': [0, {'max': 10}],
    'vue/html-indent': ['error', 2, {
      'baseIndent': 1,
    }],
    'vue/no-v-html': 'off',
  }
}
