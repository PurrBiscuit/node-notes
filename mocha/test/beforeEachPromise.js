const assertStrict = require('assert').strict

const { promisifiedTimeout } = require('../../promises/utils')

describe('test suite for beforeEach that returns a promise', () => {
  let message

  // a beforeEach can return a promise and mocha will wait
  // for the promise to get resolved or rejected before continuing
  beforeEach('promise returning beforeEach', () =>
    promisifiedTimeout(2000, 'resolve', 'this is the message')
      .then(res => message = res)
  )

  it('message should equal value from promise', () => {
    assertStrict.equal(message, 'this is the message')
  })

  it('should pass', () => {})
})
