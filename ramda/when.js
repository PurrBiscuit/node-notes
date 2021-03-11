// when function -> https://ramdajs.com/docs/#when
const { isNil, when } = require('ramda')
const { underlinePrint } = require('../utils')

// 'when' is a curried function takes three arguments
// 1st - a predicate function (function that returns true/false)
//       that's used to test the third argument given to the function. 
//       reference for more info on predicate functions - https://dcl-prog.stanford.edu/function-predicate.html
// 2nd - a function to pass the third argument to if the
//       result of the predicate function is true.
// 3rd - the argument to pass to the predicate function and
//       the second function (should the predicate return true)

// the return value from 'when' depends on whether the
// predicate function returned true or false:
//     - true - the return value will be the return
//       value from the second argument function
//     - false - the return value will be the third argument, untouched

// this will return the result of passing the third argument
// to the second argument function.
underlinePrint('Using \'when\' to demonstrate a true predicate function:')

const isAdmin = ({ role }) =>
  role === 'admin'

const returnAuthenticated = user =>
  ({
    ...user,
    adminAccess: true
  })

// pass the predicate function first;
// pass the when true function next;
// this will return a unary function
const grantAdminAccess = when(isAdmin, returnAuthenticated)
const adminUser = { name: 'Martha', role: 'admin', dob: '1/27/1982' }

console.log(`Request with admin role:\n${JSON.stringify(grantAdminAccess(adminUser), null, 2)}`)

// this will result in the third argument being returned, untouched
underlinePrint('Using \'when\' to demonstrate a false predicate function:')

const noAdminUser = { name: 'Joe', role: 'leaner', dob: '4/13/1975' }
console.log(`Request with no admin role:\n${JSON.stringify(grantAdminAccess(noAdminUser), null, 2)}`)


// can use other ramda functions to check for true/false
// instead of creating your own predicate functions as well.

// trying when out with the isNil predicate function

underlinePrint('Using \'when\' with the \'isNil\' ramda function:')

const returnNil = x =>
  `third argument is a nil value - ${x}`

const checkNil = when(isNil, returnNil)

// the first two will return the result of returnNil
// since the arguments passed to them are considered nil values.
console.log(`result of the nil check with null -> ${checkNil(null)}`)
console.log(`result of the nil check with undefined -> ${checkNil(undefined)}`)

// the following will return the passed in argument, untouched, since
// it doesn't evaluate to a nil value.
console.log(`result of the nil check with a string -> ${checkNil('hello there checkNil')}`)
