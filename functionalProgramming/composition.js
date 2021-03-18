const { underlinePrint } = require('../utils')

// function composition is using the output of one function
// as the input to another function (and so one with many
// other functions chained together if needed)

// there are some libraries in Ramda that can help
// with functional composition, like pipe and compose

// function composition can be done with vanilla javascript

// example of function composition by just using
// vanilla javascript to create a bunch of small function
// and then compose them together

const trim = str => str.trim()

const wrapInDiv = str => `<div>${str}</div>`

const toLowerCase = str => str.toLowerCase()

// compose all the small functions together to get the result
// after calling one inside the other, etc.

const result = wrapInDiv(toLowerCase(trim('This is the string')))

underlinePrint('Result from functional composition example using vanilla Javascript:')

console.log(`Result is -> ${result}`)
