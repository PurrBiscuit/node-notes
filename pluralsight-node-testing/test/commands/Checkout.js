const { expect } = require('chai')

const cart = require('../models/Cart')
const checkout = require('../../app/commands/checkout')
const Cart = require('../../app/models/Cart')

describe('checkout', () => {
  it('should throw an error with an empty cart - first example', () => {
    const cart = new Cart()

    try {
      checkout(null, cart)
    } catch (error) {
      expect(error.message).to.equal('Cannot Checkout With an Empty Cart')
    }
  })

  it('should throw an error with an empty cart - second example', () => {
    const cart = new Cart()

    // put the checkout function call into a function that mocha will call later
    const callCheckout = () => checkout(null, cart)

    expect(callCheckout).to.throw()
  })
})
