const assertStrict = require('assert').strict

const { promisifiedTimeout } = require('../../promises/utils')

describe('testing promises', () => {
  it('should resolve', () =>
    promisifiedTimeout(1000, 'resolve')
  )

  it('should resolve with message', () =>
    promisifiedTimeout(2500, 'resolve', 'it worked')
      .then(res =>
        assertStrict.equal(res, 'it worked')
      )
  )
})
