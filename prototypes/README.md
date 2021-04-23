# Prototype

"The prototype is just a way of saying that for this object, use this other object, as a backup, as a delegate, as a prototype.  If someone calls my object with a property that does not exist on my object, go look in this other object." - Fun Fun Function

## References

- [Fun Fun Function - Prototype Basics](https://www.youtube.com/watch?v=YkoelSTUy7A)

## Overview

Protoypes are a way to simulate inheritance in a class based language.  You can use prototypes to delegate functionality from one object to another that it is a prototype of.  You can use the `Object.setPrototypeOf()` method in Javascript to set the prototype of one object to be another object.  This means that the object that's a prototype of another will look to it's prototype in the event that a method or property isn't on the object directly.  An example of how this works:

```
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

```
Object.setPrototypeOf(cat, animal)
```

The `Object.setPrototypeOf()` method is telling Javascript that the `animal` object is a prototype of the `cat` object.  This will make it so any of the properties of methods on the `animal` object are now available to the `cat` object.  We could then call `cat.talk()` and it would output `meow` as expected.
