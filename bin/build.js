const { JSDOM } = require('jsdom')
const fs = require('fs')
const path = require('path')
const cssFile = path.join(__dirname, '../lib/core-css.css')
const dom = new JSDOM(`<style>${fs.readFileSync(cssFile)}</style>`)
const css = dom.window.document.styleSheets[0]

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

function className (selector) {
  return selector.match(/\.-?[_a-zA-Z]+[_a-zA-Z0-9-]*/)
}

// TODO &#{&}, but only add & if -- or __ or .
function nestScss (rules) {
  const clone = rules.slice()
  const needsAmpersand = /(--', '__', '.')/
  const canNest = /(--|__|,|\s|\.|:)/
  const nested = []

  while (rules.length) {
    const [selector, rule] = rules.shift()
    const matchSelector = className(selector)
    const parentRule = matchSelector && nested.filter(([selector]) => {
      const matchKey = className(selector)
      return matchKey && matchKey[0] === matchSelector[0]
    })[0]


    if (parentRule) {
      const prefix = selector.slice(0, matchSelector.index)
      const suffix = selector.slice(matchSelector.index + matchSelector[0].length)
      if (prefix) {
        parentRule[1].push([`@at-root ${prefix}#{&}${suffix}`, rule])
      } else {
        parentRule[1].push([`&${suffix}`, rule])
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

// nestScss(parseCss(css))
console.log(toString(nestScss(parseCss(css))))

fs.writeFileSync('test.scss',
  toString(
    nestScss(
      parseCss(css)
    )
  )
)

