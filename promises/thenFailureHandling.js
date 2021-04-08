const { underlinePrint } = require('../utils')
const { promisifiedTimeout } = require('./utils')

underlinePrint('Using second argument in a .then() to handle a rejected promise:')

const rejectedProm1 = promisifiedTimeout(5000, 'reject', 'this promise was rejected')

rejectedProm1
  .then(() => { console.log('this won\'t get printed out...') })
  .then(() => { console.log('neither will this...') },
        reason => { console.log(`this will though - ${reason}`) }
  )
  .catch(() => { console.log('not called since error was handled in the .then() above ^^') })
