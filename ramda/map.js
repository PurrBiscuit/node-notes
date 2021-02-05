const { map } = require('ramda')

// map function -> https://ramdajs.com/docs/#map
console.log('----------------------------------')
console.log('Passing two args to map right away:')
// passing two arguments to map right away;
// 1st is a function with arity of one.
// 2nd is an array of digits for the function to act on.
const doubledValues = map(x => x * 2, [2, 4, 5, 8, 10])

console.log(doubledValues)

// passing just the function to map and storing
// the returned function in a const, to call with values later.
console.log('\n----------------------------------')
console.log('Passing only one arg to map:')

const doubler = map(x => x * 2)

console.log(doubler([2, 4, 5, 8, 10]))

console.log('\n----------------------------------')
console.log('Passing a named function to map:')

const double = x => x * 2

const doublerer = map(double)
console.log(doublerer([2, 4, 6, 8, 10]))

console.log('\n----------------------------------')
console.log('Passing an object to map:')

console.log(doublerer({ a: 10, b: 20, c: 30 }))
