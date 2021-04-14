const { underlinePrint } = require('../utils')
const { promisifiedTimeout } = require('./utils')

// promises can be rejected by throwing an error inside them

// rejecting a newly created promise by throwing an error right away
underlinePrint('using catch to catch a promise that was rejected due to a thrown error inside:')

const p1 = new Promise(() => {
  throw new Error('this is an error from inside the promise')
})

p1
  .catch(error => console.log('The error was ->', error))
  .then(() => underlinePrint('throwing an error from within a promise chain to reject a promise:'))

// a .then() handler can also produce a rejected promise
// by throwing an error; this will result in the .catch()
// handler handling the error down the chain if one is defined

const p2 = promisifiedTimeout(3000, 'resolve', 'this promise resolved initially...')

p2
  .then(res => {
    console.log(res)
    return 'this .then() also resolved fine...'
  })
  .then(res => {
    console.log(res)
    throw new Error('OH NO - an error!!')
  })
  .then(() => console.log('this .then() is skipped because of the error above'))
  .catch(error => console.log('catching the error thrown in the promise chain above ->', error))
