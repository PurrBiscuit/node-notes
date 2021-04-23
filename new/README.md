# The 'new' keyword

## References

- [Fun Fun Function - The 'new' keyword](https://www.youtube.com/watch?v=Y3zzCY62NYc)

## Overview

The `new` keyword in Javascript can be used to instantiate (create) new objects in Javascript.  To use the `new` keyword you add a call to a constructor function after it, passing any arguments needed to the constructor function to build the new object.  An example of a constructor function and the `new` keyword being used to create a new Object from that constructor:

```javascript
function Constructor(name) {
  this.name = name

  this.sayName = function () {
    console.log(`Object's name is ${this.name}`)
  }
}

const newObj = new Constructor('constructy')
```

The 'new' keyword does four things essentially when it's invoked.

1. It creates a new, empty object (POJO)
2. It assigns the `prototype` from the constructor function to the newly created, empty object.
3. It calls the constructor function, passing the newly created object as the `this` context along with any additional arguments that were passed to the constructor function.
4. It returns the new object that's created from the three steps above.
