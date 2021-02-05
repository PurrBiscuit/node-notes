const { __, curry } = require('ramda')

// _ placehold -> https://ramdajs.com/docs/#__
// A special placeholder value used to specify "gaps" within curried functions.

const curriedHello = curry(
  (a, b, c) =>
    console.log(`${a} ${b} ${c}`)
)

// using __ as the first argument to produce a function
// that will be waiting for that value to be passed in.
const smellySteve = curriedHello(__, 'Steve,', 'you smell.')

// passing the remaining argument (to the 1st parameter)
// and getting the result from the curriedHello function.
smellySteve('Hello,')
