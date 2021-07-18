module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/typescript/recommended'
  ],
  parserOptions: {
    ecmaVersion: 2020
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-unused-vars': 'off',
    'no-return-assign': 'off',
    'comma-dangle': 'off',
    quotes: 'off',
    semi: 'off',
    'arrow-body-style': 'off',
    // 'max-len': ['error', { code: 100 }],
    '@typescript-eslint/no-unused-vars': 'off',
    'vue/no-unused-components': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off'
  }
}
