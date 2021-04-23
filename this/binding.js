const { underlinePrint } = require('../utils')

// Different examples using bind() in Javascript

// setting a property on the global object
a = 5

// creating a function that returns the "a"
// property from the this object
function getA () {
  console.log(this)
  console.log(this.a)
}

underlinePrint('Calling getA with default binding of global object:')

// calling getA with it's default binding to global (no implicit or 
// explict binding was provided - just calling the function by itself)
// this is without 'use strict' enabled, which has different behavior
getA()

underlinePrint('Calling newObj getA with implicit binding from newObj object:')

// create a new object with "a" set to 10 and
// it's own function to return it as this
const newObj = {
  a: 10,
  getA: function () {
    console.log(this)
    console.log(this.a)
  }
}

// call it to return "a" and this from it's context
// within the newObj object itself
newObj.getA()

underlinePrint('Assigning newObj.getA function to a new function to show this changing back to global:')

const getAGlobalAgain = newObj.getA

getAGlobalAgain()

underlinePrint('Binding getA to newerObj with the .bind method:')

// create a new object that we'll use to bind to the
// original getA function that is globally bound

const newerObj = {
  a: 100
}

// bind getA to the newerObj object as it's context
const getABoundToNewerObj = getA.bind(newerObj)

getABoundToNewerObj()

underlinePrint('Using .call method to bind and call immediately getA with newestObj:')

const newestObj = {
  a: 10000
}

getA.call(newestObj)

underlinePrint('Using a class to show this getting bound to the object after instantiation:')

class Person {
  constructor(init) {
    this.firstName = init.firstName,
    this.lastName = init.lastName
  }

  sayHi() {
    console.log(`Hello, ${this.firstName} ${this.lastName}`)
  }

  getThis() {
    console.log(this)
  }
}

const p = new Person({ firstName: 'Steve', lastName: 'Purr' })
p.sayHi()
p.getThis()
