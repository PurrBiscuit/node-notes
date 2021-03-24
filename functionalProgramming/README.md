# Function Programming

## Overview

A place to review some of the principles of function programming.

## Principles

### Point-Free Style

> "Point-free style — aims to reduce some of the visual clutter by removing unnecessary parameter-argument mapping." - Kyle Simpson in Functional-Light JavaScript

The object with point-free style programming is not to remove points (parameters/arguments) entirely from Javascript code (since this isn't possible), but rather to reduce the amount of unnecessary paramters/arguments in code.

Example:

```
const newBooks = books.filter(point => isTechnology(point))
```

...can be rewritten to remove the unneeded `point` parameter/argument by removing the unneeded outer function around `isTechnology`...

```
const newBooks = books.filter(isTechnology)
```

With point-free style you want to make function compositions point-free.  This means the higher-order functions that are composed from several smaller functions.  The smaller functions that compose the function do not have to be built in a point-free manner.  Eventually, the smallest functions that make up a larger function will have points.  This includes the many functions from popular libraries like `ramda` and `lodash`.  These functions take parameters and therefore can't be considered point-free.

#### References

- [freecodecamp - how point-free composition will make you a better functional programmer](https://www.freecodecamp.org/news/how-point-free-composition-will-make-you-a-better-functional-programmer-33dcb910303a/)
- [medium - Function JS #7: Point-free style](https://medium.com/dailyjs/functional-js-7-point-free-style-b21a1416ac6a)
