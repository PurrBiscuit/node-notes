// pipe function -> https://ramdajs.com/docs/#pipe
const {
  curry,
  isNil,
  join,
  pipe,
  reject,
  values
} = require('ramda')

const { underlinePrint } = require('../utils')

// the pipe function is used to compose functions together, from left-to-right.
// the first argument may have any arity, the others must be unary.
// the result of pipe is not automatically curried (meaning the piped function
// will get invoked as soon as any number of arguments are passed to it.  you)
// can use the curry function in ramda to curry a pipe function, however.)

underlinePrint('Calling a function made up of other functions with pipe (uncurried):')

// the first function in this pipe function has an arity of three;
// this means you can pass three arguments to someBigFunction when
// you're ready to call it, eventually.

// this silly function will take in three arguments -
// the first function in the pipe will return an object with those arguments.
// the second function will return the values from that object in an array.
// the third function will reject any values in the array that are undefined.
// the final function will join them together with a | and return a string.
const someBigFunction = pipe(
  (a, b, c) =>
    ({ a, b, c }),
  values,
  reject(isNil),
  join('|')
)

// call the useless pipe function with all three arguments to see what happens
console.log(someBigFunction('apple', 'banana', 'biscuit'))

// call the useless pipe function with only two arguments to see what happens
console.log(someBigFunction('one', 'two'))

underlinePrint('Calling a function made up of other functions with pipe (curried):')

const curriedSomeBigFunction = curry(someBigFunction)

// calling curriedSomeBigFunction with only one argument
console.log(`Calling curriedSomeBigFunction with only one argument:\n${curriedSomeBigFunction('one')}\n`)
console.log(`Calling curriedSomeBigFunction with two arguments:\n${curriedSomeBigFunction('one')('two')}\n`)
console.log(`Calling curriedSomeBigFunction with three arguments:\n${curriedSomeBigFunction('one')('two')('three')}\n`)
