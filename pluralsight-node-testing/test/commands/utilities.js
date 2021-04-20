const { expect } = require('chai')

const { 
  checkForArgument,
  getArgument
 } = require('../../app/commands/utilities')

describe('utilities', () => {
  describe('checkForArgument', () => {
    it('should return the second word when asked for index one', () => {
      const argument = checkForArgument('command arg1', 1)

      expect(argument).to.equal('arg1')
    })

    it('should return undefined when asked for index three', () => {
      const argument = checkForArgument('command arg1 arg2', 3)

      expect(argument).to.be.undefined
    })

    it('should return undefined when asked for index one when no arguments given to command', () => {
      const argument = checkForArgument('command', 1)

      expect(argument).to.be.undefined
    })
  })

  describe('getArgument', () => {
    it('should return the second word when asked for index one', () => {
      const argument = getArgument('command arg1', 1)

      expect(argument).to.equal('arg1')
    })

    it('should return undefined when asked for index three', () => {
      const argument = getArgument('command arg1 arg2', 3)

      expect(argument).to.be.undefined
    })

    it('should return undefined when asked for index one when no arguments given to command', () => {
      const argument = getArgument('command', 1)

      expect(argument).to.be.undefined
    })
  })
})
