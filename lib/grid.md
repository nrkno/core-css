---
name: Grid
category: Layout
---

> The `.nrk-grid` is flex based, but with a fallback to inline-block rendering for older browsers. Used alone, the grid only places it's direct child elements next to each other, aligns height to match tallest sibling and wraps rows when needed. The grid can therefore be used just to align items, or to build more complex layouts when combined with [size classes](/#sizes):

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

## Grid as list

`.nrk-grid` can also be used to create horizontally aligned lists. `<ul>` are easily styled as a menu by combining `.nrk-grid` and `.nrk-unset`:

```grid-menu.html
<ul class="nrk-grid nrk-unset">
  <li><a href="#">Menu item 1</a></li>
  <li><a href="#">Menu item 2</a></li>
  <li><a href="#">Menu item 3</a></li>
</ul>
```
```grid-menu.css
a { text-decoration: none; margin: 7px; border: 1px solid transparent; transition: .2s }
a:hover { border-bottom-color: currentColor }
```

## Grid nowrap

Force all items on a single line by adding the grid modifier `.nrk-grid--nowrap` (scrollability in demo bellow is added for for demonstration only):

```grid-nowrap.html
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
```grid-nowrap.css hidden
.nrk-grid > * { margin: 1px; padding: 9px; background: #eee }
```

## Grid spacing

To accomplish spacing between grid items, add padding to direct children of `.nrk-grid`. However, if you further add children to grid items, these are not direct children of `.nrk-grid`, and therefore not automatically equal height. Fix this by add the class `.nrk-grid--equalize`:

```grid-equalize.html
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
```grid-equalize.css hidden
.nrk-grid { float: left; width: 45%; margin: 7px; padding: 5px; border: 1px solid #ddd }
.nrk-grid > * { outline: 1px solid #999; outline-offset: -5px}
.nrk-grid > * > * { font-size: 14px; padding: 10px; margin: 15px; border: 2px solid }
```
