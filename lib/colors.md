---
name: Colors
category: Utilites
---

> The colors provided in `core-css` is a subset of NRK's global brand colors, and is not owned by any specific product. To ease themability, the buttons, paginations and icons are set to inherit text color. Instead of mixing in hardcoded color values, use `.nrk-fade` to achieve a more subtle look.

## Palette

```color.html
<pre class="nrk-color-base">.nrk-color-base { color: #26292a; background-color: #fff }</pre>
<pre class="nrk-color-spot">.nrk-color-spot { color: #26292a; background-color: #00b9f2 }</pre>
<pre class="nrk-color-invert">.nrk-color-invert { color: #fff; background-color: #141517 }</pre>
<pre class="nrk-color-shade-1">.nrk-color-shade-1 { color: #26292a; background-color: #f6f6f6 }</pre>
<pre class="nrk-color-shade-2">.nrk-color-shade-2 { color: #26292a; background-color: #e9e9e9 }</pre>
<pre class="nrk-color-shade-3">.nrk-color-shade-3 { color: #26292a; background-color: #e0e0e0 }</pre>
<pre class="nrk-color-shade-4">.nrk-color-shade-4 { color: #26292a; background-color: #c8c8c8 }</pre>
```
```color.css hidden
pre { margin: 2px; padding: 15px }
```

## Accessibility
Please note that using color to convey meaning is unfortunate for accessibility. Ensure that information denoted by the color is either obvious from the content itself, or is included through alternative means, such as additional text hidden with the `.nrk-sr` class.

## Icons

To ease accessible contrast on icons, `core-css` sets `fill` of `<svg>` tags to inherit `currentColor` (text color). Setting color on any parent element affects color of child SVGs. To ensure consistency, prefer using the `color` property instead of `fill` when styling specific icons from css stylesheet.

```color-icons.html
<button class="nrk-button">
  Settings
  <svg width="30" height="15" aria-hidden="true"><use xlink:href="#nrk-arrow-right-long" /></svg>
</button>

<button class="nrk-button" style="color:#00b9f2">
  Settings
  <svg width="30" height="15" aria-hidden="true"><use xlink:href="#nrk-arrow-right-long" /></svg>
</button>

<button class="nrk-button">
  Settings
  <svg width="30" height="15" aria-hidden="true" style="color:#00b9f2"><use xlink:href="#nrk-arrow-right-long" /></svg>
</button>
```
