---
name: Aspects
category: Layout
---

> Use `.nrk-aspect` to scale direct child elements of a container along 16:9 aspect. Change aspect by adding a modifier class `.nrk-aspect--1x1`, `.nrk-aspect--4x3`, `.nrk-aspect--9x16`

```html
<div class="nrk-aspect">
  <div> This div has 16:9-aspect </div>
</div>

<div class="nrk-aspect nrk-aspect--4x3">
  <div> This div has 4:3-aspect </div>
</div>
```

## Generate custom aspect

The modifier classes provided in `core-css` are the most commonly used within NRK.
You can quite easily extend core-css by adding custom aspects to your css:

<code style="display:block;padding:15px"><input type="text" name="aspect" value="10:4" style="width:4em;padding:5px"> =
<span>.nrk-aspect--10x4::after { padding-top: 40% }</span></code>
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
