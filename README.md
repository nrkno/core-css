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

### Install via `npm`
```bash
npm install @nrk/core-css --save
```

```css
@import '@nrk/core-css/dist/core-css.css';
```

## Adding fonts and icons

In order to use NRKs core fonts and icons, see these related projects:  
https://github.com/nrkno/core-fonts  
https://github.com/nrkno/core-icons  

Once the fonts (*LFT Etica* and *NRK Etica Slab*) have been imported, add this to your project’s CSS:
```css
html {
  font-family: 'LFT Etica', 'Helvetica Neue', Helvetica, Arial, sans-serif;
}
```

## Contributing

### Local development
First clone `@nrk/core-css` and install its dependencies:

```bash
git clone git@github.com:nrkno/core-css.git
cd core-css
npm install
```

In order to preview the documentation and watch code changes, start the development server:

```bash
npm run watch
```

Open `src/index.html` in the browser. When the CSS file is edited, it will be injected automatically without refreshing.

### Commit messages
After making changes, please make sure to keep commits small, clean and that the commit message actually refers to the updated files. Stylistically, make sure the message is **Capitalized** and **starts with a verb in the present tense** (for example `Add|Remove|Fix ...`).
