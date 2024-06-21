const _ = require('highland')

// you can push items out a stream using a generator function
// more info -> https://caolan.github.io/highland/#_(source)
_(push => {
  push(null, 1)
  push(null, 2)
  push(null, 3)

  // end the stream with _.nil
  push(null, _.nil)
})
  .map(x => x * 2)
  .toArray(console.log) // should output [2, 4, 6]
