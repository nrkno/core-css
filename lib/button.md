---
name: Button
category: Elements
---

Buttons automatically adapt to color and background specified on parent or the button element itself.
Use `class="nrk-button nrk-button--o"` for rounded button with larger icon. [See also icon accessibility →](https://static.nrk.no/core-icons/latest/#a11y)

```buttons.html
<a class="nrk-button" href="#">Link</a>
<button class="nrk-button">Button</button>
<button class="nrk-button" disabled>Button disabled</button>
<a class="nrk-button is-disabled" href="#">Link disabled</a>
<button class="nrk-button is-busy" disabled>Busy</button>
<button class="nrk-button nrk-color-invert">Inverted</button>
<button class="nrk-button nrk-button--o"><svg><use xlink:href="#nrk-close" /></svg></button>
<button class="nrk-button">Text and icon <svg class="nrk-fade" width="30" height="30" aria-hidden="true"><use xlink:href="#nrk-arrow-right-long" /></svg></button>
```
