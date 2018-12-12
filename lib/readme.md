# Core CSS

## `@nrk/core-css` exposes a set of class names to ease creating backwards compatible layouts and standard NRK styling. The code is built on BEM-conventions and is namespaced `nrk-` to play nice with existing projects.

---

## Installation

Insert the code below into the `<head>` of your page to get started:

```html
<link rel="stylesheet" href="https://static.nrk.no/core-css/major/1/core-css.min.css">
```

---

## Accessibility

In general, semantic html-markup like `<nav>` does not require attributes for usability. There will be cases in which you will need to selectively "show" and "hide" content by either removing it from the visual flow or preventing screen readers from reading it.

<div class="nrk-grid">
  <div class="nrk-xs-12of12 nrk-md-3of12" style="padding-right:15px">
    <h3>Hide from everyone</h3>
    Add the <a href="https://developer.mozilla.org/en/docs/Web/HTML/Global_attributes/hidden"><code>hidden</code> attribute</a> to dynamically hide content from all users. Remove the attribute to show it again.
  </div>
  <div class="nrk-xs-12of12 nrk-md-3of12" style="padding-right:15px">
    <h3>Hide from screen readers only</h3>
    Use the <code>aria-hidden="true"</code> attribute to hide content from screen readers while keeping it visually perceivable.
  </div>
  <div class="nrk-xs-12of12 nrk-md-3of12" style="padding-right:15px">
    <h3>Hide from browsers only</h3>
    Use the <code>.nrk-sr</code> class to show content to screen readers only. The content is visually hidden but remains visible for screen readers.
  </div>
  <div class="nrk-xs-12of12 nrk-md-3of12" style="padding-right:15px">
    <h3>Hide but show on focus</h3>
    Use the <code>.nrk-sr-focus</code> class to show content only when in focus. This is practical in keyboard-only interactions such as "skip to content".
  </div>
</div>

---

## Grid

 The `.nrk-grid` is flex based, but with a fallback to inline-block rendering for older browsers. Used alone, the grid only places it's direct child elements next to each other, aligns height to match tallest sibling and wraps rows when needed. The grid can therefore be used just to align items, or to build more complex layouts when combined with [size classes](#sizes):

```html
<!-- Horizontal menu -->
<ul class="nrk-grid">
  <li>Menu item 1</li>
  <li>Menu item 3</li>
  <li>Menu item 3</li>
</ul>

<!-- Grid with size classes -->
<div class="nrk-grid">
  <div class="nrk-xs-6of12">I'm a half</div>
  <div class="nrk-xs-6of12">And I'm a half too</div>
</div>
```

### Grid as list

`.nrk-grid` can also be used to create horizontally aligned lists. `<ul>` are easily styled as a menu by combining `.nrk-grid` and `.nrk-unset`:

```html
<!--demo-->
<ul class="nrk-grid nrk-unset">
  <li><a href="#">Menu item 1</a></li>
  <li><a href="#">Menu item 2</a></li>
  <li><a href="#">Menu item 3</a></li>
</ul>
```

### Grid nowrap

Force all items on a single line by adding the grid modifier `.nrk-grid--nowrap` (scrollability in demo bellow is added for for demonstration only):

```html
<!--demo-->
<div style="overflow:scroll">
  <div class="nrk-grid nrk-grid--nowrap">
    <div>Item</div><div>Item</div><div>Item</div><div>Item</div>
    <div>Item</div><div>Item</div><div>Item</div><div>Item</div>
    <div>Item</div><div>Item</div><div>Item</div><div>Item</div>
    <div>Item</div><div>Item</div><div>Item</div><div>Item</div>
    <div>Item</div><div>Item</div><div>Item</div><div>Item</div>
    <div>Item</div><div>Item</div><div>Item</div><div>Item</div>
    <div>Item</div><div>Item</div><div>Item</div><div>Item</div>
  </div>
</div>
```
<style>
.nrk-grid > * { padding: 9px }
</style>

### Grid spacing

To accomplish spacing between grid items, add padding to direct children of `.nrk-grid`. However, if you further add children to grid items, these are not direct children of `.nrk-grid`, and therefore not automatically equal height. Fix this by add the class `.nrk-grid--equalize`:

<div class="doc-demo-grid">

```html
<!--demo-->
<div class="nrk-grid">
  <div class="nrk-xs-6of12">
    <div>Without .nrk-grid--equalize</div>
  </div>
  <div class="nrk-xs-6of12">
    <div>Children of grid items are not equal height. Children of grid items are not equal height.</div>
  </div>
</div>

<div class="nrk-grid nrk-grid--equalize">
  <div class="nrk-xs-6of12">
    <div>With .nrk-grid--equalize</div>
  </div>
  <div class="nrk-xs-6of12">
    <div>Children of grid items are now equal height. Children of grid items are now equal height.</div>
  </div>
</div>
```

<style>
.doc-demo-grid details { clear: both }
.doc-demo-grid .nrk-grid { float:left; width: 43%; margin: 0 1% 1rem; outline: 1px solid #ddd }
.doc-demo-grid .nrk-grid > * { outline: 1px solid #999; outline-offset: -5px}
.doc-demo-grid .nrk-grid > * > * { font-size: 14px; padding: 9px; border: 2px dotted }
</style>

</div>

---

## Sizes

The size classes consists of a fluid 12 unit system that can be used inside and outside of the `.nrk-grid`. Size classes are prefixed `.nrk-xs-`, `.nrk-sm-`, `.nrk-md-`, `.nrk-lg-` and `.nrk-xl-`, and apply to the corresponding screen widths, overriding classes targeted at smaller devices. Therefore, applying any `.nrk-md-*` class to an element will affect its styling on medium devices and up - also on large devices if a `.nrk-lg-*` class is not present.

### Breaking out
To break out of a centered container and fill the entire screen width, use `.nrk-xs-100`. Make sure to wrap the entire page in a `<div style="overflow:hidden">Your page here<div>` to prevent a bug where OS X renders excess horizontal scrollbars.

### Breakpoints
Breakpoints are rem-based (root font size) to improve accessibility. Sizes behave accordingly to user preferences for font scaling.

```css
.nrk-xs-[*] {}                               /* All devices */
@media (min-width: 40rem) { .nrk-sm-[*] {} } /* 640px when 16px root font size: Small devices and up */
@media (min-width: 45rem) { .nrk-md-[*] {} } /* 720px when 16px root font size: Medium devices and up */
@media (min-width: 62rem) { .nrk-lg-[*] {} } /* 992px when 16px root font size: Large devices and up */
@media (min-width: 90rem) { .nrk-xl-[*] {} } /* 1440px when 16px root font size: Extra large devices and up */
```

### Example grid
```html
<!-- Full width mobile, half on tablet, third on desktop -->
<div class="nrk-grid">
  <div class="nrk-xs-12of12 nrk-sm-6of12 nrk-lg-3of12 nrk-xl-2of12">Content</div>
  <div class="nrk-xs-12of12 nrk-sm-6of12 nrk-lg-3of12 nrk-xl-2of12">Content</div>
</div>

<!-- Full width all devices -->
<div class="nrk-grid">
  <div class="nrk-xs-12of12">Content</div>
  <div class="nrk-xs-12of12">Content</div>
</div>
```

---

## Button

Buttons automatically adapt to color and background specified on parent or the button element itself.
Use `class="nrk-button nrk-button--o"` for rounded button with larger icon. [See also icon accessibility →](https://static.nrk.no/core-icons/latest/#accessibility)

```html
<!--demo-->
<a class="nrk-button" href="#">Link</a>
<button class="nrk-button">Button</button>
<button class="nrk-button" disabled>Button disabled</button>
<a class="nrk-button is-disabled" href="#">Link disabled</a>
<button class="nrk-button is-busy" disabled>Busy</button>
<button class="nrk-button nrk-color-invert">Inverted</button>
<button class="nrk-button nrk-button--o"><svg><use xlink:href="#nrk-close" /></svg></button>
<button class="nrk-button">Text and icon <svg class="nrk-fade" width="30" height="30" aria-hidden="true"><use xlink:href="#nrk-arrow-right-long" /></svg></button>
```

---

## Pagination

```html
<!--demo-->
<div class="nrk-pagination">
  <a href="#1" class="nrk-button">1</a>
  <a href="#2" class="nrk-button">2</a>
  <a href="#" class="nrk-button is-disabled">&hellip;</a>
  <a href="#8" class="nrk-button">8</a>
  <a href="#9" class="nrk-button">9</a>
</div>
<div class="nrk-pagination">
  <button class="nrk-button">Single button</button>
</div>
<div class="nrk-pagination">
  <button class="nrk-button nrk-color-invert">Single invert button</button>
</div>
```

---

## Inputs

Use the `.nrk-input` on `<select>`, `<textarea>` and all `<input>` fields for a consistent appearance across browsers. This will reset the various platform specific styles and provide a sane default style
which is [easy to customize](#customise). Combine this with the `.nrk-grid` system to get a fully
functional form layout.

<style>
.my-input-focus:focus { box-shadow: 0 0 0 2px #00b9f2 }
.doc-demo .nrk-grid fieldset input { margin-right: .2em }
.doc-demo .nrk-grid fieldset label,
.doc-demo .nrk-grid > label .nrk-input {
  display: block;
  margin-bottom: .2em;
}
</style>

```html
<!--demo-->
<div class="nrk-grid">
    <label class="nrk-xs-12of12 nrk-lg-4of12">
      Text
      <input class="nrk-input nrk-xs-12of12" type="text" placeholder="Text">
    </label>
    <label class="nrk-xs-12of12 nrk-lg-4of12">
      Search
      <input class="nrk-input nrk-xs-12of12" type="search" placeholder="Search">
    </label>
    <label class="nrk-xs-12of12 nrk-lg-4of12">
      Number
      <input class="nrk-input nrk-xs-12of12" type="number" placeholder="Number">
    </label>
    <label class="nrk-xs-12of12 nrk-lg-4of12">
      E-mail
      <input class="nrk-input nrk-xs-12of12" type="email" placeholder="E-mail">
    </label>
    <label class="nrk-xs-12of12 nrk-lg-4of12">
      Telephone (readonly)
      <input class="nrk-input nrk-xs-12of12" type="tel" placeholder="Telephone" readonly>
    </label>
    <label class="nrk-xs-12of12 nrk-lg-4of12">
      Password
      <input class="nrk-input nrk-xs-12of12" type="password" placeholder="Password">
    </label>
    <label class="nrk-xs-12of12 nrk-lg-4of12">
      File
      <input class="nrk-input nrk-xs-12of12" type="file">
    </label>
    <label class="nrk-xs-12of12 nrk-lg-4of12">
      File (disabled)
      <input class="nrk-input nrk-xs-12of12" type="file" disabled>
    </label>
    <label class="nrk-xs-12of12 nrk-lg-4of12">
      Select
      <select class="nrk-input nrk-xs-12of12">
        <option value="one">One</option>
        <option value="two">Two</option>
        <option value="three">Three</option>
      </select>
    </label>
    <label class="nrk-xs-12of12 nrk-lg-4of12">
      Select multiple
      <select class="nrk-input nrk-xs-12of12" multiple size="3">
        <option value="one">One</option>
        <option value="two">Two</option>
        <option value="three">Three</option>
      </select>
    </label>
    <div class="nrk-xs-12of12 nrk-lg-4of12">
      <fieldset class="nrk-unset">
        <legend class="nrk-unset">Checkboxes</legend>
        <label><input class="nrk-input" type="checkbox" value="Checkbox" checked> Checked</label>
        <label><input class="nrk-input" type="checkbox" value="Checkbox"> Unchecked</label>
        <label><input class="nrk-input" type="checkbox" value="Checkbox" disabled> Disabled</label>
      </fieldset>
    </div>
    <div class="nrk-xs-12of12 nrk-lg-4of12">
      <fieldset class="nrk-unset">
        <legend class="nrk-unset">Radios</legend>
        <label><input class="nrk-input" type="radio" value="one" name="radio" checked> Alternative 1</label>
        <label><input class="nrk-input" type="radio" value="two" name="radio"> Alternative 2</label>
        <label><input class="nrk-input" type="radio" value="two" name="radio" disabled> Disabled</label>
      </fieldset>
    </div>
    <label class="nrk-xs-12of12">
      Textarea
      <textarea class="nrk-input nrk-xs-12of12" placeholder="Textarea text" rows="4"></textarea>
    </label>
</div>
```

Note that `input[type="range"]` is supported yet. For dates and times, use the
[`@nrkno/core-datepicker`](https://static.nrk.no/core-components/latest/index.html?core-datepicker/readme.md)
component.


### Customise

Property | Affects | Notes | Examples
:-- | :-- | :-- | :--
`color` | Text color and graphics | Changes color of the arrow in `<select>`, and checked state of `input[type="checkbox"]` and `input[type="radio"]` | <input type="checkbox" class="nrk-input" style="color:#00b9f2" checked> &nbsp; <input type="checkbox" class="nrk-input" style="color:#ffe100;background-color:#141517" checked>
`background-color` | Background color | *NB:* Do not use the shorthand `background` as this breaks the `select`, `checkbox` and `radio` graphics. | <select class="nrk-input" style="background-color:#e9e9e9"><option>Options</option></select>
`box-shadow` | Border color and style | We use `box-shadow` instead of `border`, as this renders consistently on all elements in both modern browsers, and Internet Explorer 11 (having trouble with border or checkbox/radio elements). *NB:* Also resets `:focus` style | <input type="text" class="nrk-input" style="box-shadow:0 1px 2px rgba(0,0,0,.3);margin:0 5px 9px 0"><input type="text" class="nrk-input" style="box-shadow:0 0 0 2px rgba(0,0,0,.1)">
`:focus`, `:checked`, `:disabled`, `:enabled`, `:required`, `:valid`, `:invalid`, `:not(:focus)`, `:not(:checked)` | State based styling | Change style based on input state. Use `box-shadow` or `outline` to set your own focus styling, i.e.:<br>`.nrk-input:focus { box-shadow: 0 0 0 2px #00b9f2 }` | <input type="text" class="nrk-input my-input-focus">


---
<style>
br + .nrk-switch:checked { color:blue }
</style>

## Switches

Use `.nrk-switch` on an `input[type="checbox"]` element to create switches.

```html
<!--demo-->
<label><input class="nrk-switch" type="checkbox" value="1" checked> Checked</label>
<br><label><input class="nrk-switch" type="checkbox" value="2"> Unchecked</label>
<br><label><input class="nrk-switch" type="checkbox" value="3" disabled> Disabled</label>
```


### Customise

Property | Affects | Examples
:-- | :-- | :--
`color` | Color of track | <input type="checkbox" class="nrk-switch" style="color:blue">
`background` | Color of knob | <input type="checkbox" class="nrk-switch" style="background:yellow">
`font-size` | Size | <input type="checkbox" class="nrk-switch" style="font-size:20px">
`opacity` | Opacity | <input type="checkbox" class="nrk-switch" style="opacity:1">
`:checked` | Checked state | `.nrk-switch:checked { color: blue }` <br><input type="checkbox" class="nrk-switch">


---

## Aspects

Use `.nrk-aspect` to scale direct child elements of a container along 16:9 aspect. Change aspect by adding a modifier class `.nrk-aspect--1x1`, `.nrk-aspect--4x3`, `.nrk-aspect--9x16`

```html
<div class="nrk-aspect">
  <div> This div has 16:9-aspect </div>
</div>

<div class="nrk-aspect nrk-aspect--4x3">
  <div> This div has 4:3-aspect </div>
</div>
```

### Generate custom aspect

The modifier classes provided in `@nrk/core-css` are the most commonly used within NRK.
You can quite easily extend core-css by adding custom aspects to your css:

<code style="display:block;padding:15px"><input type="text" name="aspect" value="10:4" style="width:4em;padding:5px"> = <span>.nrk-aspect--10x4::after { padding-top: 40% }</span></code>
<script>
  document.addEventListener('input', function(event){
    if (event.target.name !== 'aspect') return
    var code = event.target.nextElementSibling
    var size = event.target.value.split(':').map(Number).slice(0,2)
    var key = size.join('x').replace(/\./, '\.')
    var pad = Number(size[1] / size[0] * 100).toFixed(2).replace(/\.0+/, '')
    code.textContent = '.nrk-aspect--' + key + '::after { padding-top: ' + pad + '% }'
  })
</script>

---

## Colors

The colors provided in `@nrk/core-css` is a subset of NRK's global brand colors, and is not owned by any specific product. To ease themability, the buttons, paginations and icons are set to inherit text color. Instead of mixing in hardcoded color values, use `.nrk-fade` to achieve a more subtle look.

### Palette

```html
<!--demo-->
<pre class="nrk-color-base">.nrk-color-base { color: #26292a; background-color: #fff }</pre>
<pre class="nrk-color-spot">.nrk-color-spot { color: #26292a; background-color: #00b9f2 }</pre>
<pre class="nrk-color-invert">.nrk-color-invert { color: #fff; background-color: #141517 }</pre>
<pre class="nrk-color-shade-1">.nrk-color-shade-1 { color: #26292a; background-color: #f6f6f6 }</pre>
<pre class="nrk-color-shade-2">.nrk-color-shade-2 { color: #26292a; background-color: #e9e9e9 }</pre>
<pre class="nrk-color-shade-3">.nrk-color-shade-3 { color: #26292a; background-color: #e0e0e0 }</pre>
<pre class="nrk-color-shade-4">.nrk-color-shade-4 { color: #26292a; background-color: #c8c8c8 }</pre>
```

### Accessibility colors
Please note that using color to convey meaning is unfortunate for accessibility. Ensure that information denoted by the color is either obvious from the content itself, or is included through alternative means, such as additional text hidden with the `.nrk-sr` class.

### Icons color

To ease accessible contrast on icons, `@nrk/core-css` sets `fill` of `<svg>` tags to inherit `currentColor` (text color). Setting color on any parent element affects color of child SVGs. To ensure consistency, prefer using the `color` property instead of `fill` when styling specific icons from css stylesheet.

```html
<!--demo-->
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

---

## Truncate

Use the class `.nrk-truncate` if you have an element containing a long text that should be displayed as a single line and you don't want the text to overflow the width of its container. Note that this technique does not work for elements with `display: inline`, but can easily be fixed by applying `display: inline-block`.

```html
<!--demo-->
<button class="nrk-button nrk-xs-2of12 nrk-truncate">Some really long button text</button>
```


---

## Unset

As browser support is limited for the css [unset property](https://developer.mozilla.org/en-US/docs/Web/CSS/unset), instead use class `.nrk-unset` to unset default browser styling. Add this to `<button>`, `<ul>`, `<select>`, links, headings, etc. to make them "unstyled" (inherits color and font from parent element):

```html
<!--demo-->
<button class="nrk-unset">An unset button</button>
<ul class="nrk-unset"><li>An unset list</li></ul>
<a class="nrk-unset" href="#">An unset link</a>
<table class="nrk-unset"><tr><td>An unset table</td></tr></table>
<select class="nrk-unset"><option>An unset select</option></select>
```

---

## FAQ


### Why isn't `@nrk/core-css` modular?
One of the missions of having a shared css-foundation, is to provide a consistent and predictable coding environment across platforms and products. If `@nrk/core-css` is modularised, a team can for instance easily opt out the button, making the css environment less predictable when other teams are to contribute.

### Where are all the components?
As `@nrk/core-css` is the foundation for many NRK products, a low overhead is important. [`@nrk/core-components`](https://github.com/nrkno/core-components) is therefore another repository and can be consumed when needed.

### Why doesn't `@nrk/core-css` expose CSS variables?
While both sizes and NRK brand colors are exposed in `@nrk/core-css`, these should not be altered. `nrk-xs-12of12` should always result in 100%, and `nrk-color-spot` should always result in the official spot color of NRK. CSS-variables are cascading, and can break predictability. Instead, each product is free to define their own colors in form of new selectors.

### How does `@nrk/core-css` handle fonts, icons or favicons?
Assets are not handled by `@nrk/core-css`, as these are separate projects. Please see refer to the [core-styleguide](https://static.nrk.no/core-styleguide/latest/).
