const { expect } = require('chai')
const proxyquire = require('proxyquire')
const sinon = require('sinon')

let axiosProxy = {}

const result = { data: { userId: 1, id: 1, title: 'something different than actual API', completed: true } }

// this reads as -> require the '../examples/urlGetter' module BUT override
// the 'axios' package being imported by the 'require'
// in the '../examples/urlGetter' module with the axiosProxy object defined here.
const urlGetter = proxyquire('../examples/urlGetter', { axios: axiosProxy })

describe('urlGetter (using proxyquire)', () => {
  beforeEach('stub out the axios.get call in .urlGetter', () => {
    // set a get method on the axiosProxy object; this will be used
    // by the '../examples/urlGetter' module whenever it sees axios.get now.
    axiosProxy.get = sinon.stub().resolves(result)
  })

  describe('getRequest', () => {
    it('should call axios.get once', () =>
      urlGetter.getRequest('https://jsonplaceholder.typicode.com/todos/1')
        .then(() => {
          expect(axiosProxy.get.calledOnce).to.be.true
        })
    )

    it('should call axios.get with the correct url', () =>
      urlGetter.getRequest('https://jsonplaceholder.typicode.com/todos/1')
        .then(() => {
          expect(axiosProxy.get.getCall(0).args[0]).to.equal('https://jsonplaceholder.typicode.com/todos/1')
        })
    )

    it('should call axios.get with the correct options', () =>
      urlGetter.getRequest('https://jsonplaceholder.typicode.com/todos/1')
        .then(() => {
          expect(axiosProxy.get.getCall(0).args[1]).to.deep.equal({
            headers: {
              'User-Agent': 'Proxyquire-Examples'
            }
          })
        })
    )

    it('should return the stubbed out result', () =>
      urlGetter.getRequest('https://jsonplaceholder.typicode.com/todos/1')
        .then(res => {
          expect(res).to.deep.equal(result)
        })
    )
  })
})
