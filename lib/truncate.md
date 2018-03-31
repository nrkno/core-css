---
name: Truncate
category: Utilites
---

Use the class `.nrk-truncate` if you have an element containing a long text that should be displayed as a single line and you don't want the text to overflow the width of its container. Note that this technique does not work for elements with `display: inline`, but can easily be fixed by applying `display: inline-block`.

```truncate.html
<button class="nrk-button nrk-xs-1of12 nrk-truncate">Some really long button text</button>
```
