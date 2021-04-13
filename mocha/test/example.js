describe('example test suite', () => {
  beforeEach('first beforeEach hook', () => console.log('this is the first beforeEach hook'))
  beforeEach('second beforeEach hook', () => console.log('this is the second beforeEach hook'))
  before('first before hook', () => console.log('this before is only run once'))

  it('should pass', () => {})

  it('should pass again', () => {})

  // uncomment this test to show how a test can fail
  // if an error is thrown in a test using mocha

  // it('should fail', () => {
  //   throw new Error('the test failed!')
  // })
})
