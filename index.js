module.exports = {
  env: {
    'browser': true,
    'es6': true,
    'mocha': true,
    'jest': true
  },
  extends: ['standard'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  plugins: ['jsdoc'],
  rules: {
    'arrow-parens': [2, 'as-needed'],
    'brace-style': [2, 'stroustrup'],
    'comma-dangle': [2,
      {
        'arrays': 'only-multiline',
        'objects': 'only-multiline',
        'imports': 'always-multiline',
        'exports': 'always-multiline'
      }
    ],
    'generator-star-spacing': [2,
      {
        "before": false,
        "after": true
      }
    ],
    'indent': [2, 2,
      {
        'flatTernaryExpressions': true
      }
    ],
    'multiline-ternary': 0,
    'no-extra-parens': [2, 'all',
      {
        'nestedBinaryExpressions': false
      }
    ],
    'no-var': 2,
    'object-curly-newline': 0,
    'object-property-newline': 0,
    'operator-linebreak': 0,
    'padded-blocks': 0,
    'quotes': [2, 'single',
      {
        'allowTemplateLiterals': true
      }
    ],
    'space-before-function-paren': 0,
    'yield-star-spacing': [2,
      {
        "before": false,
        "after": true
      }
    ],

    // jsdoc
    'jsdoc/check-alignment': 2,
    'jsdoc/check-indentation': 2,
    'jsdoc/check-syntax': 2,
    'jsdoc/check-tag-names': 2,
    'jsdoc/check-types': 2,
    'jsdoc/implements-on-classes': 2,
    'jsdoc/no-types': 2,
    'jsdoc/no-undefined-types': 2
  }
}
