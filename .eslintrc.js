module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  extends: ['standard-with-typescript', 'prettier'],
  parserOptions: {
    project: './tsconfig.json',
  },
  plugins: ['@stylistic/js'],
  root: true,
  rules: {
    '@typescript-eslint/semi': 'off',
    '@typescript-eslint/indent': 'off',
    '@stylistic/js/semi': ['error', 'always'],
    '@stylistic/js/indent': 'off',
  },
  overrides: [
    {
      files: ['./src/**/*.test.ts'],
      parserOptions: {
        project: './tsconfig.tests.json',
      },
    },
  ],
};
