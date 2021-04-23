const { underlinePrint } = require('../utils')

underlinePrint('Use the __proto__ property on an object to see its prototypes:')

const animal = {
  talk: function() {
    console.log(this.sound)
  }
}

const cat = {
  sound: 'meow!'
}

Object.setPrototypeOf(cat, animal)

console.log('The animal object looks like ->', animal)
console.log('The cat object looks like ->', cat)

// the __proto__ property will return the object that
// the current object is a prototype of.  In this example
// it would return the animal object with one function, talk.
console.log('The prototype object, __proto__, of cat is the animal object ->', cat.__proto__)

underlinePrint('Demonstrating that the __proto__ property is a reference to another object:')

// The __proto__ property is a REFERENCE to the same object
// that the object is using as a prototype, it's not a copy.
// This means that it points to the same address in memory
// and any updates to properties on the object through __proto__
// or to the original object will propogate to the other.
console.log('The original animal object and cat.__proto__ are references to each other ->', animal === cat.__proto__)
