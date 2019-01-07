import classesToMixins from './bin/classesToMixins.js'
import autoprefixer from 'autoprefixer'
import postcss from 'rollup-plugin-postcss'
import serve from 'rollup-plugin-serve'
import header from 'postcss-header'
import path from 'path'
import fs from 'fs'
import { version } from './package.json'

const isBuild = !process.env.ROLLUP_WATCH
const readme = String(fs.readFileSync(path.join('lib', 'readme.md')))
const versioned = readme.replace(/core-css\/major\/\d+/, `core-css/major/${version.match(/\d+/)}`)
fs.writeFileSync(path.join(__dirname, 'lib', 'readme.md'), versioned)

export default [{
  input: 'lib/core-css.js',
  output: [
    { format: 'cjs', file: 'core-css.js' },
    { format: 'cjs', file: 'core-css.min.js' },
    { format: 'cjs', file: 'lib/core-css.min.js' }
  ],
  plugins: [
    postcss({
      extract: true,
      minimize: { reduceIdents: { keyframes: false } },
      sourceMap: isBuild,
      plugins: [
        autoprefixer({ browsers: ['last 1 version', '> .1%', 'ie 9-11'] }),
        header({ header: `/*! @nrk/core-css v${version} - Copyright (c) 2018-${new Date().getFullYear()} NRK */` }),
        classesToMixins({
          styl: './core-css.styl',
          scss: './core-css.scss',
          less: './core-css.less'
        })
      ]
    }),
    isBuild || serve('lib')
  ]
}]
