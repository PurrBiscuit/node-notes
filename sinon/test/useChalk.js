const chalk = require('chalk')
const { expect } = require('chai')
const sinon = require('sinon')

// pulling in the useChalk library which just returns the chalk package
const useChalk = require('../useChalk')

// overwriting the supportsColor property in the chalk object
sinon.stub(chalk, 'supportsColor').value('hello')

describe('calls useChalk function after sinon.stub override\'s property', () => {
  it('should show the overridden property in useChalk library', () => {
    // we should see the property overwritten on the chalk package
    // that was required by the useChalk library as well
    expect(useChalk().supportsColor).to.equal('hello')
  })
})
