module.exports = {
  root: true,
  env: { browser: true, es2020: true },

  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    'prettier',
  ],

  ignorePatterns: ['dist', '.eslintrc.cjs'],

  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },

  settings: {
    react: { version: '18.2' },
  },

  plugins: ['react-refresh', 'prettier'],

  rules: {
    // 🌟 General clean rules
    'no-unused-vars': 'off',

    // 🌟 React rules
    'react/jsx-no-target-blank': 'off',
    'react/no-unescaped-entities': 'off',

    // 🌟 React Fast Refresh
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],

    // 🌟 Prettier ko completely OFF
    'prettier/prettier': 'off',
  },
};
