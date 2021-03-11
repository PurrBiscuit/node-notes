// path function -> https://ramdajs.com/docs/#path
const { path } = require('ramda')
const { underlinePrint } = require('../utils')

// used to retrieve the value from a given path of an array or object;
// the path function is a curried function that takes two arguments.
// 1st argument - the path to look for the value on
// 2nd argument - the object or array to retrieve the value from

// the function below simulates a function that could be created
// to pluck the value from the "Authorization" header on a request object.
const getAuthHeader = path(['headers', 'authorization'])

underlinePrint('Calling the getAuthHeader function to retrieve the Authorization Header from request objects:')

const noAuthRequest = {
  headers: {
    host: 'something.com'
  }
}

const authRequest = {
  headers: {
    ...noAuthRequest.headers,
    authorization: "Bearer somesupersecretJWT"
  }
}

const isAuthed = req => {
  const authHeader = getAuthHeader(req)

  if (authHeader) {
    return console.log(`This request is authed with '${authHeader}'`)
  }

  console.log('This request is not authed with a valid Authorization header.')
}

// check the no authed request first
isAuthed(noAuthRequest)

// check the authed request next
isAuthed(authRequest)


// you can also use the path function with arrays

underlinePrint('Use path function with an array:')

const arr = [[ 10, 15, 20 ], [ 2, 4, 6 ], [ 9, 12, 15 ]]

// calling path with [ 0, 1 ] tells it to look for the value at
// the first element and then continue to look at the second
// element in the array returned from the first element
console.log(`The second element of the array in the root array's first element is ${path([ 0, 1 ], arr)}`)
