# eslint-config-raine
[![npm version](https://img.shields.io/npm/v/eslint-config-raine.svg)](https://npmjs.org/package/eslint-config-raine)

Raine's personal eslint configuration

https://eslint.org/docs/developer-guide/shareable-configs

#### Base config:
- standard

#### Plugins:
- eslint
- eslint-config-standard
- eslint-plugin-fp
- eslint-plugin-import
- eslint-plugin-jsdoc
- eslint-plugin-node
- eslint-plugin-promise

## Install

Install `eslint-config-raine` with eslint plugins:

```
npm install --save-dev eslint-config-raine eslint eslint-config-standard eslint-plugin-fp eslint-plugin-import eslint-plugin-jsdoc eslint-plugin-node eslint-plugin-promise
```

## Usage

#### package.json

```json
  "eslintConfig": {
    "extends": [
      "raine"
    ]
  }
```

or

#### .eslintrc.json

```json
{
  "extends": "raine"
}
```

## Rules

These rules will automatically be used when you extend the config as shown above:

```json
{
  "env": {
    "browser": true,
    "es6": true,
    "mocha": true,
    "jest": true
  },
  "extends": [
    "standard"
  ],
  "globals": {
    "Atomics": "readonly",
    "SharedArrayBuffer": "readonly"
  },
  "parserOptions": {
    "ecmaVersion": 2018,
    "sourceType": "module"
  },
  "plugins": [
    "fp",
    "jsdoc"
  ],
  "rules": {
    "arrow-parens": [
      2,
      "as-needed"
    ],
    "brace-style": [
      2,
      "stroustrup"
    ],
    "comma-dangle": [
      2,
      {
        "arrays": "only-multiline",
        "objects": "only-multiline",
        "imports": "always-multiline",
        "exports": "always-multiline"
      }
    ],
    "generator-star-spacing": [
      2,
      {
        "before": false,
        "after": true
      }
    ],
    "indent": [
      2,
      2,
      {
        "flatTernaryExpressions": true
      }
    ],
    "multiline-ternary": 0,
    "no-extra-parens": [
      2,
      "all",
      {
        "nestedBinaryExpressions": false
      }
    ],
    "no-var": 2,
    "object-curly-newline": 0,
    "object-property-newline": 0,
    "operator-linebreak": 0,
    "padded-blocks": 0,
    "quotes": [
      2,
      "single",
      {
        "allowTemplateLiterals": true
      }
    ],
    "space-before-function-paren": 0,
    "yield-star-spacing": [
      2,
      {
        "before": false,
        "after": true
      }
    ],
    "fp/no-class": 2,
    "fp/no-delete": 2,
    "fp/no-events": 2,
    "fp/no-get-set": 2,
    "fp/no-loops": 2,
    "fp/no-mutating-assign": 2,
    "fp/no-mutating-methods": 2,
    "fp/no-valueof-field": 2,
    "jsdoc/check-alignment": 2,
    "jsdoc/check-indentation": 2,
    "jsdoc/check-syntax": 2,
    "jsdoc/check-tag-names": 2,
    "jsdoc/check-types": 2,
    "jsdoc/implements-on-classes": 2,
    "jsdoc/newline-after-description": 2,
    "jsdoc/no-types": 2,
    "jsdoc/no-undefined-types": 2
  }
}
```
