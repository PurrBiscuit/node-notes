// reference mozilla docs - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures

console.log('Simple example of a closure:')
console.log('----------------------------')

// creating a function, called funky, that takes one argument
// and returns a function that takes another argument
const funky = x =>
  y => x + y

// calling funky with an argument of 2 will return another function
// that will have x set to 2, thanks to a JS closure.
const add2 = funky(2)

// calling add2 with another argument passed in will take the
// previously set x argument, set to 2, and return the value
// of adding x and the new argument passed in.
console.log(add2(10))


console.log('\nChanging value within a closure:')
console.log('--------------------------------')

// funkier is a function that takes one argument
// and returns an object with three functions. Each
// of the three functions shares the same lexical environment
// from within the scope of the funkier function.
const funkier = x => {
  return {
    add: y => x + y,
    getX: () => x,
    updateX: y => x = y
  }
}

// we can call funkier with a value passed in and deconstruct
// the object that returns the two functions.
const { add, getX, updateX } = funkier(2)

// we can use the getter method from the returned object
// to see what the value of x is in that closure.
console.log('Checking value of x in closure...')
console.log(getX())

// we can then call add and get results based on x being
// set to the value of 2 from the call to funkier.
console.log('Adding 4 to value of x in closure...')
console.log(add(4))

// we can also call the updateX function that has access
// to the x in it's closure, which will set it to a different value.
// this demonstrates how closures are REFERENCED and not COPIED.
// meaning the value can be updated by a function in the
// lexical environment that's shared by other functions,
// and it'll be reflected in the other functions too.
console.log('Updating the x argument in funkier to 100...')
updateX(100)

// we can check the new value of x in the closure with the getter function.
console.log('Checking NEW value of x in closure...')
console.log(getX())

// when we call the add function again now we'll see that
// the value of x in the add functions closure has been set to 100.
console.log('Adding 4 to the NEW value of x in closure...')
console.log(add(4))
