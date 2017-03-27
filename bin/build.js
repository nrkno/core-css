/* eslint-disable no-console, no-sync */
const http = require('http');
const path = require('path');
const fs = require('fs');

const CSS_FILENAME = 'core-css.css';
const CSS_FILENAME_MIN = 'core-css.min.css';
const SRC_PATH = path.join(__dirname, '../src');
const DIST_PATH = path.join(__dirname, '../dist');
const LIVE_RELOAD_PORT = 35729;

const throttle = (fn, ms = 300) => {
  let id;
  return () => {
    clearTimeout(id);
    id = setTimeout(fn, ms);
  };
};

const minifyCss = (css) => String(css)              // Work with file as string
  .replace(/\/\*[^!][^*]*\*\//g, '')                // Strip comments
  .replace(/\s*(^|[:;,{}/]|$)\s*/g, '$1');           // Strip white space around tokens

const buildCss = () => Promise
  .resolve(fs.readFileSync(path.join(SRC_PATH, CSS_FILENAME)))
  .then((css) => `/*! Copyright (c) 2015–${new Date().getFullYear()} NRK <opensource@nrk.no> */\n${css}`)
  .then((css) => {
    fs.writeFileSync(path.join(DIST_PATH, CSS_FILENAME), css);
    fs.writeFileSync(path.join(DIST_PATH, CSS_FILENAME_MIN), minifyCss(css));
  });

buildCss()
  .then(() => console.log('Built CSS'))
  .catch((err) => console.log(err.stack));

if (process.argv.indexOf('--watch') > 0) {
  http.createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.writeHead(200, {'Content-Type': 'text/event-stream'});
    fs.watch(path.join(SRC_PATH, CSS_FILENAME), throttle(() => {
      res.write(`data: ${CSS_FILENAME}\n\n`);
    }));
  }).listen(LIVE_RELOAD_PORT, () =>
    console.log(`Livereload on http://localhost:${LIVE_RELOAD_PORT}`)
  );
}
