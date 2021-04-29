const axios = require('axios')
const { expect } = require('chai')
const sinon = require('sinon')
const urlGetter = require('../examples/urlGetter')

const result = { data: { userId: 1, id: 1, title: 'something different than actual API', completed: true } }

describe('urlGetter (with just sinon.stub())', () => {
  describe('getRequest', () => {
    beforeEach('stub out the axios.get method', () => {
      // this works to override the axios.get in the ../examples/urlGetter
      // module because of the way node.js has a singleton object
      // that's shared by any modules that are requiring the same package.
      sinon.stub(axios, 'get').resolves(result)

      // showing that the axios object's methods can be directly overwritten
      axios.put = 'something'
    })

    it('should only call axios.get once', () =>
      urlGetter.getRequest('https://jsonplaceholder.typicode.com/todos/1')
        .then(() => {
          expect(axios.get.callCount).to.equal(1)
        })
    )

    it('should call axios.get with the correct url', () =>
      urlGetter.getRequest('https://jsonplaceholder.typicode.com/todos/1')
        .then(() => {
          expect(axios.get.getCall(0).args[0]).to.equal('https://jsonplaceholder.typicode.com/todos/1')
        })
    )

    it('should call axios.get with the correct options', () =>
      urlGetter.getRequest('https://jsonplaceholder.typicode.com/todos/1')
        .then(() => {
          expect(axios.get.getCall(0).args[1]).to.deep.equal({
            headers: {
              'User-Agent': 'Proxyquire-Examples'
            }
          })
        })
    )

    // show that the axios package used in ../examples/urlGetter
    // has been modified from the changes made in this test file's beforeEach.
    it('should return the new value for axios.put from urlGetter', () =>
      expect(urlGetter.returnAxiosObject().put).to.equal('something')
    )

    afterEach('', () => {
      sinon.restore()
    })
  })
})
