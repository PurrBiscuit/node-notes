const { underlinePrint } = require('../utils')

// Demonstrating the behavior of the .prototype property on a constructor
underlinePrint('Accessing the prototype property on a constructor function:')

function Dog(breed) {
  this.breed = breed
}

// using the new keyword on a constructor function will access its
// .prototype keyword and create a new object based on that prototype.
const dog = new Dog('shitzu')

console.log('The prototype property of the Dog function is ->', Dog.prototype)
console.log('The __proto__ property of the dog object is ->', dog.__proto__)

// things can be added to the prototype of the constructor function
// later and they will be accessible to objects created off that prototype.
underlinePrint('Adding a new function to the Dog prototype:')

Dog.prototype.sayBreed = function() {
  console.log(`My breed is a ${this.breed}.`)
}

dog.sayBreed()

console.log('The prototype property of the Dog function is ->', Dog.prototype)
console.log('The __proto__ property of the dog object is ->', dog.__proto__)
