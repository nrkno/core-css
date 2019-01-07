# @nrk/core-css ![Release](https://img.shields.io/github/release/nrkno/core-css.svg)
> Base styling and utilities for all NRK projects.

For installation and usage, read the [documentation](https://static.nrk.no/core-css/latest/).

## Adding fonts and icons

In order to use NRKs core fonts and icons, see these related projects:  
https://github.com/nrkno/core-fonts (Only available for NRK employees)
https://github.com/nrkno/core-icons

Once the fonts (*LFT Etica* and *NRK Etica Slab*) have been imported, add this to your project’s CSS:
```css
html {
  font-family: 'LFT Etica', 'Helvetica Neue', Helvetica, Arial, sans-serif;
}
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
