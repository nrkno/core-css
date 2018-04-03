const path = require('path');
const fs = require('fs');

const CSS_FILENAME = 'core-css.css';
const CSS_FILENAME_MIN = 'core-css.min.css';
const LIB_PATH = path.join(__dirname, '../lib');

const minifyCss = (css) => String(css)              // Work with file as string
  .replace(/\/\*[^!][^*]*\*\//g, '')                // Strip comments
  .replace(/\s*(^|[>:;,{}/]|$)\s*/g, '$1');         // Strip white space around tokens

const buildCss = () => Promise
  .resolve(fs.readFileSync(path.join(LIB_PATH, CSS_FILENAME)))
  .then((css) => `/*! Copyright (c) 2015-${new Date().getFullYear()} NRK <opensource@nrk.no> */\n${css}`)
  .then((css) => fs.writeFileSync(path.join(LIB_PATH, CSS_FILENAME_MIN), minifyCss(css)));

buildCss()
  .then(() => console.log('Built CSS'))
  .catch((err) => console.log(err.stack));
