# @nrk/core-css ![Release](https://img.shields.io/github/release/nrkno/core-css.svg)
> Base styling and utilities for all NRK projects.
> `@nrk/core-css` exposes a set of class names and mixins to ease creating backwards compatible layouts and standard NRK styling. The code is built on BEM-conventions and is namespaced `nrk-` to play nice with existing projects.

## Documentation
https://static.nrk.no/core-css/latest/

## Installation

### Using NPM

```sh
npm install @nrk/core-css
```

then import it into your stylesheet:

```css

@import "@nrk/core-css/core-css.css"                /* css */
@import "@nrk/core-css/core-css.scss"               /* sass */
@import "@nrk/core-css/core-css.less"               /* less */
@import "node_modules/@nrk/core-css/core-css.styl"  /* stylus */
```

### Using static

Recommended only for prototyping.

```html
<link rel="stylesheet" href="https://static.nrk.no/core-css/major/1/core-css.min.css">
```

## Local development
First clone `@nrk/core-css` and install dependencies:

```bash
git clone git@github.com:nrkno/core-css.git
cd core-css
npm install
npm start # Your browser will open documentation with hot reloading
```

### Building and committing
After having applied changes, remember to build the CSS, SVG and fonts before pushing the changes upstream.

```bash
git checkout -b feature/my-changes
# update the source code
npm run build
git commit -am "Add my changes"
git push origin feature/my-changes
# then make PR to the master branch,
# and assign a CSS developer to review your code
```

> NOTE! Please also make sure to keep commits small, clean and that the commit message actually refers to the updated files. Formally, make sure the message is **Capitalized** and **starts with a verb**.
