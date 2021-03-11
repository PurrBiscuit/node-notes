// REST PARAMETERS

const { underlinePrint } = require('../utils')

// The rest parameter syntax allows a function to accept
// an indefinite number of arguments as an array, providing
// a way to represent variadic functions in JavaScript.
// Reference - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters

// Using rest parameter syntax to show variable arguments passed
// to a function that's using the rest parameters syntax to turn
// those arguments into an array.

// defining a function that takes any number of arguments
// and combines them into an array using the rest syntax.
const resty = (...params) => {
  if (Array.isArray(params))
    console.log(`params is now an array with length ${params.length}`)

  console.log( `params array contains: ${JSON.stringify(params)}`)
}

// call the function with different number of arguments passed to it.
underlinePrint('Calling resty function with two arguments:')

resty('hello', 'hi')

underlinePrint('Calling resty function with five arguments:')
resty('passing', 'five', 'arguments', 'to', 'resty')

// you use the spread operator to spread the array out into
// arguments for a call to a function that takes a specific number of parameters.

const printThree = (a, b, c) => {
  console.log(`a is ${a}`)
  console.log(`b is ${b}`)
  console.log(`c is ${c}`)
}

// collect the parameters as an array and then spread
// them back out to the call to the function passed to it.
const resty2 = fn => (...params) =>
  fn(...params)

// collect the parameters as an array but then pass
// the whole params array in the call to the function passed to it.
const resty3 = fn => (...params) =>
  fn(params)


// this demonstrates the resty2 function spreading the array out
// on the call to the function that was passed to it.
underlinePrint('Calling resty2 function to take the printThree function and three arguments:')

resty2(printThree)('hello', 'hi', 'howdy')

// this demonstrates the resty3 function not spreading the array out
// on the call to the function that was passed to it.
underlinePrint('Calling resty3 function to take the printThree function and three arguments:')

resty3(printThree)('hello', 'hi', 'howdy')


// demonstrating how only the last parameter can be the rest parameter

const resty4 = (a, b, ...params) => {
  console.log(`a is: ${a}`)
  console.log(`b is: ${b}`)
  console.log(`params is the other params: ${params}`)
}

// call the resty4 function to show the remaining params getting stored
// as an array in the function after the first two are stored in a and b.
underlinePrint('Calling resty4 function with six arguments:')

resty4('hello, i\'m the a parameter', 'hello, i\'m the b parameter', 'another arg', 'one more', 'hello', 'what')

// demonstrating how you could convert arguments passed to a function
// into an array by using the "arguments" object before
// rest parameters were introduced into JS.

// must use the non-arrow function syntax to have access to the arguments object.
// Reference - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments
function resty5 (a, b) {
  const arr = Array.from(arguments)

  console.log(arguments)

  console.log(`Arguments passed to resty5 as an array: ${arr}`)
}

underlinePrint('Calling resty5 function with it\'s two needed arguments:')

resty5('one', 'two')

// you can use the arguments object in a function that isn't an arrow function
// to allow for any number of arguments to be passed to a function
// that otherwise wouldn't have a list of parameters associated with it.

// can't use all array methods on argument object since
// it isn't actually an array, even though it's array like.
function sum() {
  let sum = 0;
  for(let i = 0; i < arguments.length ; i++)
    sum += arguments[i]
  
    return sum;
}

underlinePrint('Calling sum function with five integers:')

const total = sum(10, 5, 20, 30, 35)
console.log(`The total is ${total}`)


// you can also do the above but convert the arguments object
// to an actual array so you have access to normal array methods first.
function sum2() {
  const arr = Array.from(arguments)

  return arr.reduce((acc, num) =>
    acc + num
  )
}

underlinePrint('Calling sum2 function with five integers:')

const total2 = sum2(5, 15, 20, 25, 35)
console.log(`The total is ${total2}`)
