const { expect } = require('chai')

const {
  orderCallback,
  orderPromise
} = require('../app/order')

describe('async order functions', () => {
  it('should call the callback with a true value', done => {
    const cart = {}

    const callback = p1 => {
      expect(p1).to.be.true
      done()
    }

    orderCallback(cart, callback)
  })

  it('should return a promise with true value', () => {
    const cart = {}

    return orderPromise(cart)
      .then(res => expect(res).to.be.true)
  })
})
