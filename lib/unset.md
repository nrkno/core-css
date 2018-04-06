---
name: Unset
category: Utilities
---

As browser support is limited for the css [unset property](https://developer.mozilla.org/en-US/docs/Web/CSS/unset), instead use class `.nrk-unset` to unset default browser styling. Add this to `<button>`, `<ul>`, `<select>`, links, headings, etc. to make them "unstyled" (inherits color and font from parent element):

```unset.html
<button class="nrk-unset">An unset button</button>
<ul class="nrk-unset"><li>An unset list</li></ul>
<a class="nrk-unset" href="#">An unset link</a>
<table class="nrk-unset"><tr><td>An unset table</td></tr></table>
<select class="nrk-unset"><option>An unset select</option></select>
```
