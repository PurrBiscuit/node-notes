const assertStrict = require('assert').strict

const add2 = require('../../../maths/add2')

describe('add2 functionality testing', () => {
  // testing add2 without using any sort of assertion library
  it('should equal 5 (without using any assertion library)', () => {
    if (add2(3) === 5)
      return
    
    // need to throw an error to fail the test if the
    // if statement above doesn't result in true
    throw new Error('it didn\'t equal 5')
  })

  // testing add2 using the built in assert library from node
  // without passing optional message as third argument
  it('should equal 5 (with built-in node.js assert library and no message arg)', () => {
    assertStrict.equal(add2(3), 5)
  })

  // testing add2 using the built in assert library from node
  // passing optional message to display on error as third argument
  it('should equal 5 (with built-in node.js assert library and message arg)', () => {
    assertStrict.equal(add2(3), 5, 'this message will show if assertion fails')
  })
})
