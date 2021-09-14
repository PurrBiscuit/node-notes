# Notes From Mostly Adequate's Guide Book

## Chapter 1: What Ever Are We Doing?

General Programming Design Principles:
- DRY (Don't Repeat Yourself)
- YAGNI (Ya Ain't Gonna Need It)
- Loose coupling, high cohesion
- The principle of least surprise
- Single Responsibility

Review of some different mathematical principles:

```
// associative
add(add(x, y), z) === add(x, add(y, z));

// commutative
add(x, y) === add(y, x);

// identity
add(x, 0) === x;

// distributive
multiply(x, add(y,z)) === add(multiply(x, y), multiply(x, z));
```

-------

## Chapter 2: First Class Functions

When we say functions are "first class", we mean they are just like everyone else.  They can be stored in variables, arrays, passed to other functions as arguments, returned from functions, etc.

Different ways to write object methods in Javascript:

- As a function that's assigned to a key in the object:

```javascript
const someObj = {
  funky: console.log,
  funkyWithArgs: (a, b) => a + b
}
```

- As function declarations inside the object directly:

```javascript
const someObj2 = {
  funky(a) { return console.log(a) },
  funkyWithArgs(a, b) { return a + b }
}
```

The reason that the `someObj.funky` example works in the above examples is because `console.log` is already a function that expects one argument.  We can simply assign that function to the `funky` key and now `funky` will also be a method that expects one argument and prints the value to the screen, like `console.log`.  This is because functions are "first class" in Javascript.

-------

## Chapter 3: Pure Happiness with Pure Functions

### Oh to be Pure Again

A pure function is a function that, given the same input, will always return the same output and does not have any observable side effect.  An example of a `pure` vs `impure` function is the `slice` and `splice` Array methods:

```javascript
const xs = [1,2,3,4,5];

// pure
xs.slice(0,3); // [1,2,3]
xs.slice(0,3); // [1,2,3]
xs.slice(0,3); // [1,2,3]

// impure
xs.splice(0,3); // [1,2,3]
xs.splice(0,3); // [4,5]
xs.splice(0,3); // []
```

`slice` is considered `pure` since it doesn't mutate (directly change) the array on which it was called.  It simply returns the values and doesn't directly update the array itself.  `splice`, on the other hand, will remove elements from the array it was called on.  This is considered a side effect.  `slice` returns the same result each time and `splice` does not since it's constantly mutating the array on each call.

Another example of `pure` vs `impure` functions:

```javascript
// impure
let minimum = 21
const checkAge = age => age >= minimum

// pure
const checkAge = (age) => {
  const minimum = 21;
  return age >= minimum;
}
```

The first `checkAge` function is considered `impure` since it relies on a variable outside itself.  This variable can also change without notice, which makes the output of the function unpredictable.  The second `checkAge` function does not rely on a variable outside itself and therefore has predictable behavior.

### Side Effects May Include...

Side effects are anything that occurs in our computation other than the calculation of a result.
