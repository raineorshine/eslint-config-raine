# eslint-config-raine
[![npm version](https://img.shields.io/npm/v/eslint-config-raine.svg)](https://npmjs.org/package/eslint-config-raine)

Raine's personal eslint configuration

https://eslint.org/docs/developer-guide/shareable-configs

#### Base config:
- standard

#### Plugins:
<%= peerDependencies
  .map(plugin => '- ' + plugin)
  .join('\n')
%>

## Install

Install `eslint-config-raine` with eslint plugins:

```
npm install --save-dev eslint-config-raine <%=peerDependencies.join(' ')%>
```

## Usage

#### .eslintrc.json

```json
{
  "extends": "raine"
}
```

## Rules

```json
<%= JSON.stringify(rules, null, 2) %>
```
