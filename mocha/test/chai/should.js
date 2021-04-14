const should = require('chai').should()

describe('some chai should tests', () => {
  it('is true', () => {
    const result = true

    result.should.to.be.true
  })

  it('is equal to 1', () => {
    const result = 1

    result.should.to.be.equal(1)
  })
})
