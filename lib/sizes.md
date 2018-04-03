---
name: Sizes
category: Layout
---

> The size classes consists of a fluid 12 unit system that can be used inside and outside of the .nrk-grid. Size classes are prefixed `.nrk-xs-`, `.nrk-sm-`, `.nrk-md-`, `.nrk-lg-` and `.nrk-xl-`, and apply to the corresponding screen widths, overriding classes targeted at smaller devices. Therefore, applying any `.nrk-md-*` class to an element will affect its styling on medium devices and up - also on large devices if a `.nrk-lg-*` class is not present.

## Breaking out
To break out of a centered container and fill the entire screen width, use `.nrk-xs-100`. Make sure to wrap the entire page in a `<div style="overflow:hidden">Your page here<div>` to prevent a bug where OS X renders excess horizontal scrollbars.

## Breakpoints
Breakpoints are rem-based (root font size) to improve accessibility. Sizes behave accordingly to user preferences for font scaling.

```css
.nrk-xs-                               /* All devices */
@media (min-width: 40rem) { .nrk-sm- } /* 640px when 16px root font size: Small devices and up */
@media (min-width: 45rem) { .nrk-md- } /* 720px when 16px root font size: Medium devices and up */
@media (min-width: 62rem) { .nrk-lg- } /* 992px when 16px root font size: Large devices and up */
@media (min-width: 90rem) { .nrk-xl- } /* 1440px when 16px root font size: Extra large devices and up */
```

## Example grid
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
