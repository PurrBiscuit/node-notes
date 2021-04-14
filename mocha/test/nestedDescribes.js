const { blue, yellow } = require('chalk')

describe('this is a first level test suite', () => {
  before('before in first level', () =>
    console.log(blue('    run before in first level only'))
  )

  beforeEach('beforeEach in first level', () =>
    console.log(yellow('        run before each test in the describes nested below'))
  )

  describe('this is a second level test suite', () => {
    before('before in first level', () =>
      console.log(blue('        run before in single second level only'))
    )

    it('this is test number 1', () => {})
    it('this is test number 2', () => {})
  })

  describe('this is also a second level test suite', () => {
    it('this is test number 3', () => {})
    it('this is test number 4', () => {})
  })
})
