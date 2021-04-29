const proxyquire = require('proxyquire')

const { underlinePrint } = require('../../utils')

underlinePrint('Demoing how NOT to override a method from a destructured package:')

// using an empty object for axiosProxy will allow axios to
// initially use all of its original methods, not overriding any of them.
const axiosProxy = {}

// using proxyquire with an empty object will try axios initially
// as if it hasn't been altered.  this will initialize axios in the
// urlGetterDestructured module with an untouched axios package.
const urlGetterDestructured = proxyquire('./urlGetterDestructured', { axios: axiosProxy })

// trying to override the .get method on the axiosProxy object
// AFTER the initialization already took place with the destructuring
// happening within the urlGetterDestructured module.
axiosProxy.get = (url, options) => {
    console.log(`URL -> ${url}, and options -> `, options)
  }

console.log('Checking the results of calling urlGetterDestructured.getRequest, which uses axios.get under the hood:')
// this will make the call out the actual API and return data
urlGetterDestructured.getRequest('https://jsonplaceholder.typicode.com/todos/1')
  .then(res => console.log('The response from the actual API is ->', res.data))
  .then(() => {
    // printing out the body of the axios.get method that the
    // urlGetterDestructured function is actually using (instead
    // of the stubbed one).
    console.log()
    console.log('Showing the overriden function\'s body from urlGetterDestructured:')
    console.log(urlGetterDestructured.returnAxiosGet().toString())
  })

