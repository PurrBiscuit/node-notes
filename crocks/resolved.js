const { Resolved } = require('crocks').Async

const log = type => value =>
  console.log(`${type}:`, value)

// create an Async with Resolved
Resolved('In a resolved async....')
  .map(r => {
    console.log('1 - the value in the async is now ->', r)
    return 'A new value...'
  })
  .map(r => {
    console.log('2 - the value in the async is now ->', r)
    return 'and I\'m Done...'
  })
  .fork(log('error'), log('success'))
