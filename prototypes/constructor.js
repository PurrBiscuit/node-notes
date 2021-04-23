const { underlinePrint } = require('../utils')

// Demonstrating different ways to define methods in a constructor function
underlinePrint('Defining methods within a constructor itself during function declaration:')

// defining a new constructor function to create Dog objects off of
function Dog(name) {
  // has a name property that is accessible outside the constructor function
  this.name = name

  // has a barkCount variable that is NOT accessible outside the constructor function
  let barkCount = 0

  // if we want to increase the barkCount variable with a method
  // then we HAVE to define the method within the constructor function itself
  this.bark = function() {
    barkCount++
    console.log(`${name} says woof woof`)
  }

  this.getBarkCount = function() {
    console.log(`${name} has barked ${barkCount} times`)
  }
}

const dog = new Dog('fido')

// The logs below show that the Dog prototype object
// doesn't have anything on it yet.  All the methods available
// to the dog object come from the constructor function currently.
console.log('The new dog object looks like ->', dog)
console.log('The Dog prototype should be empty ->', Dog.prototype)
console.log('Checking the Dog prototype by using the __proto__ property on the dog object ->', dog.__proto__)

underlinePrint('Calling some methods on the dog object that aren\'t part of the prototype object:')

for (let i = 0; i < 10; i++)
  dog.bark()

dog.getBarkCount()

// Demostrating how a method can get added to the prototype
// of the constructor function and that method becomes
// available to all instances of that constructor immediately afterward.
underlinePrint('Adding a method to the Dog constructors prototype object:')

Dog.prototype.wagTail = function() {
  console.log(`${this.name} is wagging their tail.`)
}

dog.wagTail()

// Notice again from the output below that the methods that
// were defined WITHIN the constructor function, like bark and getBarkCount,
// do NOT get output as part of the prototype object.
console.log('Output from Dog.prototype ->', Dog.prototype)
console.log('Output from dog.__proto__ ->', dog.__proto__)

// Demonstrating that the __proto__ and prototype properties
// both point to the same object in memory.
underlinePrint('Demonstrate that prototype and __proto__ both point to the same object in memory:')

console.log('Dog.prototype === dog.__proto__ ->', Dog.prototype === dog.__proto__)
