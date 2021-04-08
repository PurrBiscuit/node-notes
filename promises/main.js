const { underlinePrint } = require('../utils')
const { promisifiedTimeout } = require('./utils')

underlinePrint('Printing the result of a single promise to the console:')

// calling the promisifiedTimeout function to produce a promise
// that resolves after 2 seconds; handling the returned value from the
// promise with a .then() method that prints the value to the console.
promisifiedTimeout(2000, 'resolve', 'some value to return in promise')
  .then(res => console.log(`Promise 1 resolved with - ${res}`))

// adding a console.log to the script to show that the program won't
// wait for the promise to return a value before continuing to the next line.
console.log('This should print to the console before the promise resolves...\n')

// .then() methods also return a promise; the value that's returned in
// the promise is the value that's returned from within the .then() handler
promisifiedTimeout(4000, 'resolve', 'some value to return in promise')
  .then(() => 'returning a new value from the then() method')
  .then(res => console.log(`Promise 2 resolved with - ${res}`))

// you can also assign a promise to a variable and attach a .then()
// to the variable to do things with that promise as it resolves or rejects
const prom3 = promisifiedTimeout(6000, 'resolve', 'i was assigned to a variable')

prom3.then(res => console.log(`Promise 3 resolved with - ${res}`))
