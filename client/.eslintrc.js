module.exports = {
    env: {
      browser: true,
      es6: true,
    },
    extends: [
      'eslint:recommended',
      'plugin:import/errors',
      'plugin:import/warnings',
      'plugin:react/recommended',
      'airbnb',
      'plugin:prettier/recommended',
      'prettier/react',
    ],
    globals: {
      Atomics: 'readonly',
      SharedArrayBuffer: 'readonly',
    },
    parser: "babel-eslint",
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
      ecmaVersion: 2018,
      sourceType: 'module',
    },
    plugins: [
      'react',
    ],
    rules: {
      "import/prefer-default-export":0,
      "react/state-in-constructor":0
    },
  };