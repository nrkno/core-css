# @nrk/core-css
Core CSS layer for web services.

## Installation

### Install via static.nrk.no (preferred)
```html
<link rel="stylesheet" href="https://static.nrk.no/core-css/latest/core-css.min.css">
```
or version
```html
<link rel="stylesheet" href="https://static.nrk.no/core-css/X.X.X/core-css.min.css">
```

### Install with `npm`
```bash
npm install @nrk/core-css --no-optional --save
```

### Install with `yarn`
```bash
yarn add @nrk/core-css
```

```css
@import '@nrk/core-css/dist/core-css.css';
```

## Local development
First clone `@nrk/core-css` and install dependencies:

```bash
git clone git@github.com:nrkno/core-css.git
cd core-css
npm install
```

In order to preview the documentation and watch code changes, start the development server:

```bash
npm run watch
```

Open `index.html` in the browser. When the CSS file is edited, it will be injected automatically without refreshing.

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
