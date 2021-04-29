const proxyquire = require('proxyquire')

const { underlinePrint } = require('../../utils')

underlinePrint('Demoing the use of proxyquire to override dependencies from an imported module:')

// create an empty object at first to pass to proxyquire
// for the axios module being used by './urlGetter'; this
// will leave the axios package functionality untouched, initially.
const axiosProxy = {}

// pass the axiosProxy object as a proxy to the axios package
// being used by the './urlGetter' module.
const urlGetter = proxyquire('./urlGetter', { axios: axiosProxy })

// this will make the call out the actual API and return data
urlGetter.getRequest('https://jsonplaceholder.typicode.com/todos/1')
  .then(res => console.log('The response from the actual API is ->', res.data))
  .then(() => {
    // this simple example shows that after an object is being used
    // by proxyquire for a dependency in a module, then any updates to that
    // object will trickle down to the dependency object in the module itself.
    underlinePrint('Overriding a method on the axios object used by .urlGetter to a value:')
    axiosProxy.put = 'what'
    console.log('The value of axiosProxy.put is ->', axiosProxy.put)
    console.log('The value of axios.put from the .urlGetter module is ->', urlGetter.returnAxiosObject().put)
  })
  .then(() => {
    // we can use proxyquire to override methods on a dependency object.
    // this is useful when trying to test functions that have dependencies
    // within the bodies of the functions.
    underlinePrint('Overriding a method on the axios object used by .urlGetter to a different method:')

    // the urlGetter.getRequest method uses the axios.get
    // method as a dependency so let's override that to simulate stubbing.
    axiosProxy.get = (url, options) => {
      console.log(`calling axios.get with url -> ${url}, and options ->`, options)
    }

    // call urlGetter.getRequest to see the new output from
    // the overridden axios.get method.
    urlGetter.getRequest('https://jsonplaceholder.typicode.com/todos/1')

    // we can also use update the method again if you want
    axiosProxy.get = (url, options) => {
      console.log('result from overridden axios.get method -> I was updated a SECOND time using proxyquire')
    }

    urlGetter.getRequest('https://jsonplaceholder.typicode.com/todos/1')
  })
