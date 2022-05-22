module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    amd: true
  },
  parser: '@typescript-eslint/parser',
  extends: [
    'next/core-web-vitals',
    'plugin:@typescript-eslint/recommended',
    'prettier'
  ],
  plugins: ['@typescript-eslint'],
  parserOptions: {
    ecmaVersion: 'latest',
    ecmaFeatures: {
      impliedStrict: true,
      jsx: true
    },
    sourceType: 'module',
    allowImportExportEverywhere: true
  },
  ignorePatterns: [
    'node_modules/',
    'dist/',
    'build/',
    'migrations/',
    'test/',
    'coverage',
    'workbox-*.js',
    'sw.js'
  ],
  rules: {
    '@typescript-eslint/no-unused-vars': ['error'],
    'no-mixed-spaces-and-tabs': 'off',
    'arrow-body-style': ['warn', 'as-needed'],
    'arrow-parens': 'off',
    'class-methods-use-this': 'off',
    'comma-dangle': ['error', 'always-multiline'],
    'consistent-return': 'off',
    curly: ['warn', 'multi-or-nest'],
    'dot-notation': 'warn',
    eqeqeq: ['warn', 'smart'],
    'global-require': 'off',
    'import/extensions': 'off',
    'import/first': 'off',
    'import/no-named-as-default': 'off',
    'import/no-named-as-default-member': 'off',
    'import/prefer-default-export': 'off',
    'import/no-default-export': 'off',
    'key-spacing': [
      'warn',
      {
        beforeColon: false,
        afterColon: true,
      },
    ],
    'keyword-spacing': [
      'warn',
      {
        before: true,
        after: true,
      },
    ],
    'linebreak-style': ['error', 'unix'],
    'max-len': 'off',
    'multiline-comment-style': ['warn', 'separate-lines'],
    'newline-per-chained-call': ['off'],
    'no-alert': 'off',
    'no-console': 'off',
    'no-const-assign': 'error',
    'no-debugger': process.env.ENV === 'production' ? 'error' : 'off',
    'no-extra-parens': 'off',
    'no-lonely-if': 'warn',
    'no-mixed-operators': 'off',
    'no-multiple-empty-lines': 'warn',
    'no-multi-spaces': 'warn',
    'no-prototype-builtins': 'off',
    'no-param-reassign': 'off',
    'no-plusplus': 'off',
    'no-restricted-syntax': 'off',
    'no-return-assign': 'off',
    'no-template-curly-in-string': 'off',
    'no-underscore-dangle': 'off',
    'no-useless-catch': 'warn',
    'no-useless-escape': 'warn',
    'no-whitespace-before-property': 'warn',
    'object-curly-spacing': ['warn', 'always'],
    'padded-blocks': ['warn', 'never'],
    'prefer-destructuring': 'off',
    'prefer-spread': 'off',
    'prefer-template': 'warn',
    'prettier/prettier': 'off',
    'quote-props': ['warn', 'as-needed'],
    'quotes': [
      'warn',
      'single',
      {
        'allowTemplateLiterals': true,
        'avoidEscape': true
      }
    ],
    'semi': [
      'error',
      'always'
    ],
    'space-before-function-paren': 'off',
    'space-in-parens': ['warn', 'never'],
    'space-infix-ops': [
      'warn',
      {
        'int32Hint': false,
      }
    ],
    'spaced-comment': ['warn', 'always'],
    'switch-colon-spacing': 'warn',
    'yoda': 'error'
  }
}
