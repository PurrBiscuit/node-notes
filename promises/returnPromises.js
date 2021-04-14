const { underlinePrint } = require('../utils')
const { promisifiedTimeout } = require('./utils')

// promises can be returned in a promise chain and handled
// with .then methods on the same level as the previous promise

underlinePrint('returning a promise within a promise in a promise chain:')

const p1 = promisifiedTimeout(1000, 'resolve', 'promise p1 resolved after 1 second')

p1
  .then(res => {
    console.log(res)
    return promisifiedTimeout(2000, 'resolve', 'promise inside p1 chain resolved after 2 second')
  })
  .then(res => {
    console.log(res)
  })
  .then(() => {
    underlinePrint('returning a rejected promise from within a promise chain:')
  })

// promises can also be rejected from within a promise chain
// and handled by a .catch on the same level as the original promise
// so long as the promise in the chain is returned by the handler

const p2 = promisifiedTimeout(4000, 'resolve', 'promise p2 resolved after 4 seconds')

p2
  .then(res => {
    console.log(res)
    return 'new value to resolve the next .then() to'
  })
  .then(res => {
    console.log(res)
    return promisifiedTimeout(2000, 'reject', 'promise inside p2 chain rejected after 2 second')
  })
  .then(() => {
    console.log('this will never run because of the rejected promise above')
  })
  .catch(error => {
    console.log('ERROR caught ->', error)
  })
