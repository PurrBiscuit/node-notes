const { expect } = require('chai')

const Cart = require('../../app/models/Cart')

describe('Cart', () => {
  let cart

  beforeEach(() =>
    cart = new Cart()
  )

  describe('add item to cart', () => {
    it('should have only 1 item in cart after adding 1 new item to cart', () => {
      cart.addItem({}, 1)

      expect(cart.lineItems).to.have.lengthOf(1)
    })

    it('should have a quantity of 1 after adding 1 new item to cart', () => {
      cart.addItem({}, 1)

      expect(cart.lineItems[0].quantity).to.equal(1)
    })

    it('should have only 1 item in cart after adding 1 new item to cart two times', () => {
      const myPart = {}
      cart.addItem(myPart, 1)
      cart.addItem(myPart, 1)

      expect(cart.lineItems).to.have.lengthOf(1)
    })

    it('should have a quantity of 2 after adding 1 new item to cart two times', () => {
      const myPart = {}
      cart.addItem(myPart, 1)
      cart.addItem(myPart, 1)

      expect(cart.lineItems[0].quantity).to.equal(2)
    })

    it('should have a quantity of 6 after adding 1 new item to cart two times with different quantities', () => {
      const myPart = {}
      cart.addItem(myPart, 2)
      cart.addItem(myPart, 4)

      expect(cart.lineItems[0].quantity).to.equal(6)
    })

    it('should have two items if addItem is called twice with different parts', () => {
      cart.addItem({}, 1)
      cart.addItem({}, 3)

      expect(cart.lineItems).to.have.lengthOf(2)
    })

    it('should have added quantity to correct item when multiple items are in cart already', () => {
      const myPart = {}
      cart.addItem(myPart, 1)
      cart.addItem({}, 3)
      cart.addItem(myPart, 2)

      expect(cart.lineItems[0].quantity).to.equal(3)
    })
  })

  describe('get total cost from items in cart', () => {
    it('should have a total of zero when there are no items in the cart', () => {
      const total = cart.getTotalCost()

      expect(total).to.equal(0)
    })

    it('should have a total of 10.99 when there is one item in cart that has a price of 10.99', () => {
      cart.addItem({ cost: 10.99 }, 1)
      const total = cart.getTotalCost()

      expect(total).to.equal(10.99)
    })

    it('should have a total of 23.97 when there are multiple items in cart', () => {
      cart.addItem({ cost: 8.99 }, 2)
      cart.addItem({ cost: 5.99 }, 1)

      const total = cart.getTotalCost()

      expect(total).to.equal(23.97)
    })
  })

  describe('empty items from cart', () => {
    it('should have zero items in cart after empty is called with one item in the cart', () => {
      cart.addItem({}, 1)
      cart.empty()

      expect(cart.lineItems).to.deep.equal([])
    })

    it('should have zero items in cart after empty is called with multiple items in the cart', () => {
      cart.addItem({}, 2)
      cart.addItem({}, 4)
      cart.empty()

      expect(cart.lineItems).to.deep.equal([])
    })

    it('should have a different array when emptied than the original array for lineItems', () => {
      const originalLineItems = cart.lineItems

      cart.empty()

      expect(cart.lineItems).to.not.equal(originalLineItems)
    })
  })
})
