const { blue, yellow } = require('chalk')

before(() => {
  console.log('---> output key:')
  console.log('-------------------------------')
  console.log(blue('before statements -> blue'))
  console.log(yellow('beforeEach statements -> yellow\n'))
})
