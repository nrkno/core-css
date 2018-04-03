---
name: Core CSS
category: Introduction
---

<link rel="stylesheet" href="docs.css">

> `core-css` exposes a set of class names to ease creating backwards compatible layouts and standard NRK styling. The code is built on BEM-conventions and is namespaced `nrk-` to play nice with existing projects. Insert the code below into the `<head>` of your page to get started:

```html
<link rel="stylesheet" href="https://static.nrk.no/core-css/latest/core-css.min.css">
```

<a class="nrk-button" href="https://github.com/nrkno/core-css">View on Github</a>
<a class="nrk-button" href="https://github.com/nrkno/core-css/archive/master.zip">Download CSS</a>

## FAQ

<details>
<summary>Why isn't `core-css` modular?</summary>
One of the missions of having a shared css-foundation, is to provide a consistent and predictable coding environment across platforms and products. If core-css is modularised, a team can for instance easily opt out the button, making the css environment less predictable when other teams are to contribute.
</details>

<details>
<summary>Where are all the components?</summary>
As `core-css` is the foundation for many NRK products, a low overhead is important. Components therefore live in their own repositories and can be consumed when needed. Instead, core-css provides the common CSS denominators between all of NRK's sites.
</details>

<details>
<summary>Why doesn't `core-css` expose CSS variables?</summary>
While both sizes and NRK brand colors are exposed in core-css, these should not be altered. nrk-xs-12of12 should always result in 100%, and nrk-color-spot should always result in the official spot color of NRK. CSS-variables are cascading, and can break predictability. Instead, each product is free to define their own colors in form of new selectors.
</details>

<details>
<summary>How does core-css handle fonts, icons or favicons?</summary>
Assets are not handled by core-css, as these are separate projects. Please see refer to the core-styleguide.
</details>
