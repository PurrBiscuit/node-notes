const { assert, expect } = require('chai')
const should = require('chai').should()

describe('some tests', () => {
  it('is true using chai expect', () => {
    const result = true

    expect(result).to.be.true
  })

  it('is true using chai should', () => {
    const result = true

    result.should.to.be.true
  })

  it('is true using chai assert', () => {
    const result = true

    assert.isTrue(result)
  })
})
