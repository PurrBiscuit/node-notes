// nthArg function -> https://ramdajs.com/docs/#nthArg

// Returns a function which returns its nth argument.

const { underlinePrint } = require('../utils')

// manually curried function that takes a position as its first arg
// and then takes any number of arguments after that
const nthArg = n => {
  // returns a function that takes any number of arguments (variadic)
  return (...args) => {
    // return the index directly if positive
    // return the index that's subtracted from
    // the array length if negative
    const index = n >= 0 ? n : args.length + n
    return args[index]
  }
}

underlinePrint('Trying out my nthArg function...')

console.log('First Argument is ->', nthArg(0)('arg1', 'arg2'))
console.log('Second Argument is ->', nthArg(1)('arg1', 'arg2'))
console.log('Last Argument is ->', nthArg(-1)('arg1', 'arg2', 'arg3', 'arg4', 'arg5'))
console.log('Second to Last Argument is ->', nthArg(-2)('arg1', 'arg2', 'arg3', 'arg4', 'arg5'))
