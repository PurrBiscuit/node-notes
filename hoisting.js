// reference for hoisting -> https://www.w3schools.com/js/js_hoisting.asp

// will print undefined because "a" exists in memory
// at this point, because of hoisting with var, but the
// initialization value isn't brought up with hoisting,
// only the variable declaration is.
console.log('Variable Declaration Hoisting Example:')
console.log('--------------------------------------')
console.log(a)

var a = "hello"

// at this point "var a" is initialized with the string
// "hello" since javascript is in the execution phase and
// will execute assignment operators (=).  the string "hello" 
// will be printed to the console now instead of undefined.
console.log(a)

console.log('\nFunction Expression Hoisting Example:')
console.log('-------------------------------------')

// a "function expression" in javascript looks like the following:
// var funky = function(x, y) { return x + y}

// hoisting with function expression - this will throw
// an error since the variable that's storing the function
// expression will get have it's declaration hoisted
// but it'll be initialized as undefined at this point still.
// function expressions don't hoist their initialization values.
try {
  sayHello()
} catch (e) {
  console.log(e)
}

// will print undefined for same reason as above.
console.log(sayHello)

var sayHello = () =>
  console.log('Hello!')

// since assignment to the sayHello var has happened at this point
// as part of the execution phase, the sayHello var will contain the
// function expression and will be able to get called.
sayHello()

// will print out that the sayHello var is referencing a function now.
console.log(sayHello)



console.log('\nFunction Declaration Hoisting Example:')
console.log('--------------------------------------')

// a "function declaration" in javascript looks like the follwing:
// function funky(x,y) { return x + y}

// this will work since a function declaration was used
// to define the funky function.  hoisting will make the
// function statement available before it's written in code.
funky()

// will print out that funky is a function
console.log(funky)

function funky() {
  console.log('let\'s get funky!')
}
