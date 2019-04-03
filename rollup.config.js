import { version } from './package.json'
import autoprefixer from 'autoprefixer'
import postcss from 'rollup-plugin-postcss'
import serve from 'rollup-plugin-serve'
import header from 'postcss-header'
import mixins from 'postcss-classes-to-mixins'
import fs from 'fs'

const readmes = ['readme.md', 'lib/readme.md']
readmes.forEach((path) => {
  const readme = String(fs.readFileSync(path))
  const versioned = readme.replace(/core-css\/major\/\d+/, `core-css/major/${version.match(/\d+/)}`)
  fs.writeFileSync(path, versioned)
})

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
      sourceMap: true,
      minimize: { reduceIdents: { keyframes: false } },
      plugins: [
        autoprefixer({ browsers: ['last 1 version', '> .1%', 'ie 9-11'] }),
        header({ header: `/*! @nrk/core-css v${version} - Copyright (c) 2018-${new Date().getFullYear()} NRK */` }),
        mixins({
          mixinsOnly: false,
          styl: './core-css.styl',
          scss: './core-css.scss',
          less: './core-css.less'
        }),
        mixins({
          mixinsOnly: true,
          styl: './core-css-mixins-only.styl',
          scss: './core-css-mixins-only.scss',
          less: './core-css-mixins-only.less'
        })
      ]
    }),
    !process.env.ROLLUP_WATCH || serve('lib')
  ]
}]
