const { underlinePrint } = require('../utils')

// The 'new' keyword in Javascript essentially does three things:
//   1. It creates a new, empty, plain old Javascript object.
//   2. It sets the prototype of that new object to the constructor's prototype.
//   3. It applies the arguments in the constructor function call
//      to the newly created, empty, object.
//   4. It returns the created object.

// Demonstrating the steps that 'new' takes when creating
// a new object by reimplementing it.

underlinePrint('Creating a new \'new\' function called mew and using it to create new objects:')

// the new 'new' function declaration
function mew(constructor) {
  // step 1 - create a new, empty object
  const obj = {}

  // step 2 - set the prototype on that object to the constructor's prototype
  Object.setPrototypeOf(obj, constructor.prototype)

  // step 3 - take the arguments passed to the mew function after
  //          the constructor and apply them to the obj object

  // using .apply() will call the function with the context of 'this'
  // set to the first argument passed in (an object).  The rest of the arguments
  // are passed to the function as an array.

  // convert the arguments object to an array first and
  // ignore the first argument, since it's set to the 'constructor' parameter.
  const argsArray = Array.from(arguments).slice(1)

  constructor.apply(obj, argsArray)

  // finally, return the newly created object from the function
  return obj
}


// create a constructor function that we can pass to the mew function
function Person(name, saying) {
  this.name = name
  this.saying = saying

  this.sayMyName = function() {
    console.log(`My name is ${this.name}`)
  }
}

// call the mew function and pass in the constructor function,
// along with the arguments required by that constructor function.
const wilson = mew(Person, 'Wilson', 'Hidy Ho, Neighbor')

console.log('The new wilson object created from the Person constructor ->', wilson)
console.log('The new wilson object has __proto__ ->', wilson.__proto__)
