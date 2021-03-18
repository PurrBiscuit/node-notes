const { underlinePrint } = require('../utils')

// simple reimplementation of the map function that
// only accepts a callback function and returns a new
// array based on the results of the callback function

Array.prototype.mappy = function(callback) {
  const newArray = []

  for (let i = 0; i < this.length; i++)
    newArray.push(callback(this[i]))

  return newArray
}

underlinePrint('Calling the new mappy array method:')

const mappyResult = [1, 2, 3, 4, 5, 6].mappy(x => x * 2)

console.log(`Result from calling mappy on array and doubling all values: ${mappyResult}`)

// implement mappy2 to be similar to mappy but
// this time it's callback function can accept a
// 2nd parameter for the index of the array

Array.prototype.mappy2 = function(callback) {
  const newArray = []

  for (let i = 0; i < this.length; i++)
    newArray.push(callback(this[i], i))

  return newArray
}

underlinePrint('Calling the new mappy2 array method:')

const doubleAndPrintIndex = (elm, idx) => {
  console.log(`Index is now ${idx}`)

  return elm * 2
}

const mappyResult2 = [1, 2, 3, 4, 5, 6].mappy2(doubleAndPrintIndex)

console.log(`Result from calling mappy2 on array and doubling all values: ${mappyResult2}`)

// implement mappy3 to be similar to mappy2 but
// this time it's callback function can accept a
// 3rd parameter to return the original array

Array.prototype.mappy3 = function(callback) {
  const newArray = []

  for (let i = 0; i < this.length; i++)
    newArray.push(callback(this[i], i, this))

  return newArray
}

const doubleAndPrintIndexAndArray = (elm, idx, array) => {
  console.log(`Index is now ${idx}`)

  if (idx === array.length - 1)
    console.log(`The array iterated over was -> ${array}`)

  return elm * 2
}

underlinePrint('Calling the new mappy3 array method:')

const mappyResult3 = [1, 2, 3, 4, 5, 6].mappy3(doubleAndPrintIndexAndArray)

console.log(`Result from calling mappy3 on array and doubling all values: ${mappyResult3}`)

// implement mappy4 to be similar to mappy3 but
// this time it's will return an error message if the
// first argument passed to mappy4 isn't a function

Array.prototype.mappy4 = function(callback) {
  if (typeof callback !== 'function')
    throw new TypeError(`mappy: a callback function was expected, but we received '${callback}'`)

  const newArray = []

  for (let i = 0; i < this.length; i++)
    newArray.push(callback(this[i], i, this))

  return newArray
}

underlinePrint('Calling the new mappy4 array method with a string passed as the callback arg:')

try {
  console.log([1, 2, 3, 4, 5, 6].mappy4('hello there'))
} catch (error) {
  console.log(`Caught error - ${error}`)
}
