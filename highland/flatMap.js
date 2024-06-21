const _ = require('highland')
const { compose, prop } = require('ramda')

// dataS returns a stream with one item (an object with data)
const dataS = () =>
  _([
    { 
      data: [
        {id: 12313, name: 'Joe'},
        {id: 99887, name: 'Marky'}
      ]
    }
  ])

// flatMap iterates over every item in a source stream.
// the iterating function must return a stream.
// the streams returned for all the iterations are collected together
// and are emitted on a single output stream.
dataS()
  .flatMap(compose(_, prop('data')))
  .tap(x => console.log(x))
  .toArray(() => { console.log('done') })