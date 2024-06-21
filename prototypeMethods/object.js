const { underlinePrint } = require('../utils')

// method to print out all the methods and properties in an object
// including all the properties and methods from its protoype chain

Object.prototype.getAllProperties = function() {
  let p = this

  const props = {
  properties: [],
  methods: []
  }

  while (p) {
    const objectProps = Object.getOwnPropertyNames(p)

    for (let prop of objectProps) {
      if (typeof p[prop] == 'function') {
        props.methods = [ ...props.methods, prop ]
      } else {
        props.properties = [ ...props.properties, prop ]
      }
    }

    p = p.__proto__
  }

  return props
}

const person = {
  firstName: 'Joe',
  lastName: 'Mama',
  printFullName() {
    console.log(this.firstName + ' ' + this.lastName)
  }
}

underlinePrint('Calling the new getAllProperties array method:')
console.log(person.getAllProperties())
