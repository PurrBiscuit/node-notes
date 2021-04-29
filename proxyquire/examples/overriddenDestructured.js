const proxyquire = require('proxyquire')

const { underlinePrint } = require('../../utils')

underlinePrint('Demoing how to override a dependency method for module using destructuring:')

// first step is to mock out the function that you want to override
// using an object that can be passed to proxyquire to require
// the upstream module that's using the dependency.
const axiosProxy = {
  get: (url, options) => {
    console.log(`URL -> ${url}, and options -> `, options)
  }
}

// next step is to bring in the module with proxyquire that's
// using axios as a dependency, passing the stubbed out version
// of the method to override as the proxy object.
const urlGetterDestructured = proxyquire('./urlGetterDestructured', { axios: axiosProxy })

// the reason we have to override the method first and then require
// the module using the overridden method is because of the way
// that the requires are run on initialization after an updsteam
// module is required in JS.

// after require (or proxyquire in this case) then JS will initialize
// the file being required.  if there's destructuring used to pull functions
// off a required package's import then the references to those functions
// won't be updateable via things like proxyquire following the initialization
// of that module.  this is because a new reference is created that points
// to that function that was destructured and it loses its original reference
// to its parent object after that.

console.log('Checking the results of calling urlGetterDestructured.getRequest, which uses axios.get under the hood:')
urlGetterDestructured.getRequest('https://example.com')

console.log()
console.log('Showing the overriden function\'s body from urlGetterDestructured:')
console.log(urlGetterDestructured.returnAxiosGet().toString())
