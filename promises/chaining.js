const { underlinePrint } = require('../utils')
const { promisifiedTimeout } = require('./utils')

underlinePrint('Examples of chaining using return values from promises:')

const prom1 = promisifiedTimeout(2000, 'resolve', { value: 'some value', id: 123 })

// demonstrates how to return a value from a .then()
// which can be used in another .then() that's chained to it.
prom1
  .then(res => {
    console.log(`response from prom1 -> ${JSON.stringify(res)}`)
    const { value } = res
    return value
  })
  .then(res => console.log(`response from promise returned by .then() -> ${res}`))
  .then(() => underlinePrint('Another example of chaining:'))

const prom2 = promisifiedTimeout(2000, 'resolve', 'this result is a string')

prom2
  .then(res => {
    console.log(`response from prom2 -> ${res}`)
    return { id: 747, value: 'This is a new return from .then() in prom2' }
  })
  .then(res => console.log(`response from promise returned by .then() -> ${JSON.stringify(res)}`))
