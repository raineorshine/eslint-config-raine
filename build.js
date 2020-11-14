const fs = require('fs')
const _ = require('lodash')
const pkg = require('./package.json')
const rules = require('./index')

const peerDependencies = Object.keys(pkg.peerDependencies)
  .filter(name => name.startsWith('eslint'))

const readmeTemplate = fs.readFileSync('./README-template.md', 'utf-8')
const readme = _.template(readmeTemplate)({ peerDependencies, rules })
fs.writeFileSync('README.md', readme)
