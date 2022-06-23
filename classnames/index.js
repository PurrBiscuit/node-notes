const classnames = require('classnames')

const { underlinePrint } = require('../utils')

underlinePrint('classnames(\'foo\', { bar: true })')
console.log(classnames('foo', { bar: true }))

underlinePrint('classnames([\'what\'], { huh: true, bye: false, yep: true })')
console.log(classnames(['what'], {
  huh: true,
  bye: false,
  yep: true
}))

underlinePrint('classnames(\'foo boo\', [\'what\', undefined, \'huh\'])')
console.log(classnames('foo boo', ['what', undefined, 'huh']))
