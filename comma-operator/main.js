const { underlinePrint } = require('../utils')

// this function will log out the value of x and also
// return it from the function using the comma operator
const logAndReturnValue = x =>
  (console.log('The value logged in the logAndReturnValue function is ->', x), x)

underlinePrint('Trying out the comma operator:')
console.log('The value returned by logAndReturnValue is ->', logAndReturnValue(100))
