# Prototype Methods

## References

- [Mozilla Docs - Inheritance and the Prototype Chain](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)

## Overview

You can use the `.prototype` property on a class to add new methods to the class.  New objects created from that class will be able to use the new method on themselves.

Example of adding a simple method to the `Array.prototype` would look like:

```javascript
Array.prototype.newMethod = function() {
  return this
}
```

## Notes

You have to use function declarations to add methods to a class since the scope of `this` gets set differently with arrow functions.

This function declaration keep the `this` set to the calling object:

```javascript
Array.prototype.newMethod = function() {
  return this
}
```

However, using arrow functions loses context of the `this` object that the method was called on:

```javascript
Array.prototype.newMethod = () => {
  return this     // this is set to where the function was defined, not the calling object
}
```
