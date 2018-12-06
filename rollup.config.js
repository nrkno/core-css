import autoprefixer from 'autoprefixer'
import postcss from 'rollup-plugin-postcss'
import serve from 'rollup-plugin-serve'
import pkg from './package.json'
import header from 'postcss-header'

const banner = `/*! @nrk/core-css v${pkg.version} - Copyright (c) 2018-${new Date().getFullYear()} NRK */`
const plugins = [
  postcss({
    minimize: { preset: 'default' },
    sourceMap: !process.env.ROLLUP_WATCH,
    plugins: [
      autoprefixer({ browsers: ['last 1 version', '> .1%', 'ie 9-11'] }),
      header({ header: banner })
    ],
    extract: true
  }),
  !process.env.ROLLUP_WATCH || serve('lib')
]

export default [{
  input: 'lib/core-css.js',
  output: { file: 'lib/core-css.min.js', format: 'cjs', banner },
  plugins
}]
