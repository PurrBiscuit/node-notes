const _ = require('highland')
const { unary } = require('ramda')

const { underlinePrint } = require('../utils')

// For each item in a stream, invokes a stream returning function,
// waits it to end, then re-emits the same item
// flatTap :: (a -> Stream b) -> Stream a -> Stream a
const flatTap = function (fn) {
  return _.flatMap(val =>
    _(push =>
      fn(val).errors(unary(push)).done(() => {
        push(null, val)
        push(null, _.nil)
      })
    ))
}

// a different implementation of the same idea
const flatTapTwo = fn => val =>
  fn(val).last().map(() => val).otherwise(_.of(val))

// function that emits a stream with the value and the value times two
const valueTimesTwoS = x =>
  _([x, x * 2])
  .map(console.log)

underlinePrint('flatTap')

// use the flatTap function in _.through
_([1, 2, 3])
  .through(flatTap(valueTimesTwoS))
  .toArray(console.log) // should output [1, 2, 3]

  underlinePrint('flatTapTwo')

// use the flatTapTwo function in _.flatMap
_([1, 2, 3])
  .flatMap(flatTapTwo(valueTimesTwoS))
  .toArray(console.log) // should output [1, 2, 3]
