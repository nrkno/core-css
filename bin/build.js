const { JSDOM } = require('jsdom')
const fs = require('fs')
const path = require('path')
const lib = path.join(__dirname, '../lib')
const dom = new JSDOM(`<style>${fs.readFileSync(path.join(lib, 'core-css.css'))}</style>`)
const css = dom.window.document.styleSheets[0]
const extensions = ['scss', 'less', 'styl']

// Returns array of [[selector, props], ...] to support multiple equal selectors and consistent order
function parseCss ({ cssRules }) {
  return Array.from(cssRules).reduce((rules, rule) => {
    const type = rule.constructor.name.replace(/^CSS|Rule$/g, '').toLowerCase()

    if (type === 'media') rules.push([`@media ${Array.from(rule.media).join(',')}`, parseCss(rule)])
    else if (type === 'supports') rules.push([`@supports ${rule.conditionText}`, parseCss(rule)])
    else if (type === 'keyframes') rules.push([`@keyframes ${rule.name}`, parseCss(rule)])
    else if (type === 'style' || type === 'keyframe') {
      (rule.selectorText || rule.keyText).split(',').forEach((selector) => {
        rules.push([selector.trim(), parseStyle(rule)])
      })
    } else console.warn(`Unsupported type: ${type}`)
    return rules
  }, [])
}

function parseStyle ({ style }) {
  return Array.from(style).map((prop) =>
    [prop, `${style.getPropertyValue(prop)}${style.getPropertyPriority(prop).replace(/./, '!$&')}`])
}

function nestRules (rules, target, nested = [], mediaQuery = false) {
  while (rules.length) {
    const [selector, rule] = rules.shift()
    const className = selector.match(/\.-?[_a-zA-Z]+[_a-zA-Z0-9-]*/)

    if (selector.indexOf('@media') === 0) {
      nestRules(rule, target, nested, selector)
    } else if (className) {
      let mixin
      switch (target) {
        case 'scss': mixin = `@mixin ${className[0].slice(1)}`; break
        case 'styl': mixin = `${className[0].slice(1)}()`; break
        case 'less': mixin = `${className[0]}()`; break
      }
      const parent = nested.filter(([m]) => m === mixin)[0] || nested[nested.push([mixin, []]) - 1]
      const prefix = selector.slice(0, className.index)
      const suffix = selector.slice(className.index + className[0].length)

      if (mediaQuery) {
        parent[1].push([mediaQuery, rule])
      } else if (prefix) {
        if (target === 'scss') {
          parent[1].push([`@at-root ${prefix}#{&}${suffix.replace(className[0], '#{&}')}`, rule])
        } else {
          parent[1].push([`${prefix}&${suffix}`, rule])
        }
      } else if (suffix) {
        parent[1].push([`&${suffix}`, rule])
      } else {
        parent[1].push(...rule)
      }
    } else {
      nested.push([selector, rule])
    }
  }
  return nested
}

function toString (rules, pad = '') {
  return rules.map(([key, val]) => {
    if (typeof val === 'string') return `${pad}${key}: ${val};\n`
    return `${pad}${key} {\n${toString(val, pad + '  ')}${pad}}\n`
  }).join('')
}

extensions.forEach(ext => {
  const result = toString(nestRules(parseCss(css), ext))
  fs.writeFileSync(path.join(__dirname, '..', `core-css.${ext}`), result)
})
