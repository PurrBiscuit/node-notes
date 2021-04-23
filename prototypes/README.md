# Prototype

>"The prototype is just a way of saying that for this object, use this other object, as a backup, as a delegate, as a prototype.  If someone calls my object with a property that does not exist on my object, go look in this other object." - Fun Fun Function

## References

- [Fun Fun Function - Prototype Basics](https://www.youtube.com/watch?v=YkoelSTUy7A)

## Overview

Protoypes are a way to simulate inheritance in a class based language.  You can use prototypes to delegate functionality from one object to another that it is a prototype of.  You can use the `Object.setPrototypeOf()` method in Javascript to set the prototype of one object to be another object.  This means that the object that's a prototype of another will look to its prototype in the event that a method or property isn't on the object directly.  An example of how this works:

```javascript
const animal = {
  talk: function() {
    console.log(this.sound)
  }
}

const cat = {
  sound: 'meow'
}
```

There's an object called `animal` that has a single method `talk()`.  There's also another object called `cat` that has a single property `sound`.  If we tried to call the `talk()` method on the `cat` object Javascript would throw an error saying there's no `talk()` method on the `cat` object.  Instead of writing a `talk()` method directly on the `cat` object, we can use prototypes in Javascript to inherit the `talk()` method from the `animal` object that has it available already.

```javascript
Object.setPrototypeOf(cat, animal)
```

The `Object.setPrototypeOf()` method is telling Javascript that the `animal` object is a prototype for the `cat` object.  This will make it so any of the properties or methods on the `animal` object are now available to the `cat` object.  We could then call `cat.talk()` and it would output `meow` as expected.

## Differences Between `__proto__` and `prototype` properties

### __proto__

The `__proto__` property will show the prototype of an OBJECT.  Accessing this property will return an object, since an object's prototype has to be another object in Javascript.  It can only be accessed on OBJECTS. Example:

```javascript
Object.setPrototypeOf(cat, animal)

console.log(cat.__proto__) // use this to see the prototype object of the cat object
```

### prototype

>"All 'instances' (objects created by a constructor) share one set of functions from the `prototype` object of the constructor.  If methods are defined within the constructor itself then new sets of functions are created each time a new instance is created off that constructor" - StackOverflow Person

Good reference on when to use the `prototype` property vs defining methods within the constructor function itself can be found [here on StackOverflow](https://stackoverflow.com/questions/9772307/declaring-javascript-object-method-in-constructor-function-vs-in-prototype).

The `prototype` property will show the prototype object that a constructor function has attached to it.  The constructor function can be called with the `new` keyword and any objects that are created will point back to the `prototype` object on the constructor function.  This means that any objects created from that constructor will be able to access any properties or functions from the original constructor's prototype.  This property can only be accessed on FUNCTIONS.  Example:

```javascript
function Constructor(name) {
  this.name = name
}

console.log(Constructor.prototype) // use this to see the prototype object of the Constructor function
```

The `prototype` property is a reference to an object.  Objects that are created off the constructor function with properties in its `prototype` object will all have access to the same properties from that `prototype` object.  It's important to remember that the objects created off the constructor will have a `__proto__` property that point back to the same reference address (object) that `prototype` from the constructor does.  Adding or updating a property from the `prototype` property on the constructor or the `__proto__` property from an object will affect everything that points to that `prototype` object.

