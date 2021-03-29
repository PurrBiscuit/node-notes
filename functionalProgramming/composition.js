const { underlinePrint } = require('../utils')

// function composition is using the output of one function
// as the input to another function (and so on with many
// other functions chained together if needed)

// there are some libraries in Ramda that can help
// with functional composition, like pipe and compose

// function composition can be done with vanilla javascript

// example of function composition by just using
// vanilla javascript to create a bunch of small function
// and then compose them together

const trimString = str => str.trim()

const wrapInDiv = str => `<div>${str}</div>`

const toLowerCase = str => str.toLowerCase()

// compose all the small functions together to get the result
// after calling one inside the other, etc.

const result = wrapInDiv(toLowerCase(trimString('This is the string')))

underlinePrint('Result from functional composition example using vanilla Javascript:')

console.log(`Result is -> ${result}`)

// example of the same function composition, but
// this time it's being done with ramda functions

const {
  compose,
  toLower,
  trim
} = require('ramda')

const createDivElement = compose(
  wrapInDiv,
  toLower,
  trim
)

underlinePrint('Result from functional composition example using ramda:')

console.log(`Result is -> ${createDivElement('This is Another String')}`)
