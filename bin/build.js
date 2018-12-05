const fs = require('fs')
const path = require('path')
const { version } = require('../package.json')
const lib = path.join(__dirname, '../lib')
const autoprefixer = require('autoprefixer')
const postcss = require('postcss')

const prefixer = autoprefixer({ browsers: ['last 1 version', '> .1%', 'ie 9-11'] })

const minifyCss = css => String(css) // Work with file as string
  .replace(/\/\*[^!][^*]*\*\//g, '') // Strip comments
  .replace(/\s*(^|[>:;,{}/]|$)\s*/g, '$1') // Strip white space around tokens

const buildCss = () => Promise
  .resolve(fs.readFileSync(path.join(lib, 'core-css.css')))
  .then(css => `/*! Core CSS v${version} - Copyright (c) 2015-${new Date().getFullYear()} NRK <opensource@nrk.no> */\n${css}`)
  .then(css => postcss([prefixer]).process(css, { from: 'lib/core-css.css', to: 'lib/core-css.min.css' }))
  .then(css => fs.writeFileSync(path.join(lib, 'core-css.min.css'), minifyCss(css)))

const buildDocs = () => Promise
  .resolve(fs.readFileSync(path.join(lib, 'docs.md')))
  .then(md => String(md).replace(/\/major\/\d+/, `/major/${version.match(/\d+/)}`))
  .then(md => fs.writeFileSync(path.join(lib, 'docs.md'), md))

buildCss()
  .then(() => buildDocs())
  .then(() => console.log('Built CSS and docs'))
  .catch(err => console.log(err.stack))
