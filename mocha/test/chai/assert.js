const { assert } = require('chai')

describe('some chai assert tests', () => {
  it('is true', () => {
    const result = true

    assert.isTrue(result)
  })

  it('is equal to 1', () => {
    const result = 1

    assert.strictEqual(result, 1)
  })
})
