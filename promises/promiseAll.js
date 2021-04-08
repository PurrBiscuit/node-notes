const { underlinePrint } = require('../utils')
const { promisifiedTimeout } = require('./utils')

underlinePrint('Using Promise.all to wait for all Promises to complete before printing the results:')

Promise.all([
  promisifiedTimeout(1000, 'resolve', 'promise 1 finished in 1 second'),
  promisifiedTimeout(2000, 'resolve', 'promise 2 finished in 2 seconds'),
  promisifiedTimeout(4000, 'resolve', 'promise 3 finished in 4 seconds'),
  promisifiedTimeout(8000, 'resolve', 'promise 4 finished in 8 seconds'),
])
.then(results => console.log(`The results array looks like - ${JSON.stringify(results)}`))
.then(() => underlinePrint('Using Promise.all again but printing in a different format:'))
.then(() => Promise.all([
  promisifiedTimeout(1000, 'resolve', 'promise 5 finished in 1 second'),
  promisifiedTimeout(2000, 'resolve', 'promise 6 finished in 2 seconds'),
  promisifiedTimeout(4000, 'resolve', 'promise 7 finished in 4 seconds'),
  promisifiedTimeout(8000, 'resolve', 'promise 8 finished in 8 seconds'),
]))
.then(([ promise1, promise2, promise3, promise4 ]) => {
  console.log(promise1)
  console.log(promise2)
  console.log(promise3)
  console.log(promise4)
})
