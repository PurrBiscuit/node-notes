// NESTED TERNARIES

const { underlinePrint } = require('../utils')

// Reference - https://medium.com/javascript-scene/nested-ternaries-are-great-361bddd0f340

// nested ternaries can be used to combine if/else
// statements into a single expression that returns
// a value that can be assigned to a variable, etc.

// example of a function that returns a string
// conditionally based on three different conditions.
//   1. a > b
//   2. a < b
//   3. a == b   (happens if the other two conditions don't match)
const ternFunky = (a, b) => (
  a > b
    ? `${a} is greater than ${b}`
    : a < b
      ? `${a} is less than ${b}`
      : `${a} is equal to ${b}`
)

underlinePrint('Printing out results of different ternFunky calls:')

console.log(`When a = 2 and b = 1 -> ${ternFunky(2, 1)}`)
console.log(`When a = 1 and b = 3 -> ${ternFunky(1, 3)}`)
console.log(`When a = 4 and b = 4 -> ${ternFunky(4, 4)}`)
