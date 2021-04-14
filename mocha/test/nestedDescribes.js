describe('this is a first level of a test-suite', () => {
  beforeEach('beforeEach in first level', () =>
    console.log('        run before each test in the describes nested below')
  )

  describe('this is a second level of a test-suite', () => {
    it('this is test number 1', () => {})
    it('this is test number 2', () => {})
  })

  describe('this is also a second level of a test-suite', () => {
    it('this is test number 3', () => {})
    it('this is test number 4', () => {})
  })
})
