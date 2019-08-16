module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    mocha : true
  },
  extends: ['airbnb-base','eslint:recommended', 'prettier'], // extending recommended config and config derived from eslint-config-prettier
  plugins: ['prettier'], 
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
  },
  rules: {
    'prettier/prettier': [ 
      'error',
      {
        singleQuote: true, 
        trailingComma: 'all',
      },
    ]
  },
};
