const { expect } = require('chai')

describe('some chai expect tests', () => {
  it('is true', () => {
    const result = true

    expect(result).to.be.true
  })

  it('is equal to 1', () => {
    const result = 1

    expect(result).to.be.equal(1)
  })
})
