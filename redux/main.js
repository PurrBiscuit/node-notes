// this main.js file is simulating a bug tracking app
// that we're going to implement with Redux for state management
const { createStore } = require('redux')
const reducer = require('./reducer')

const { underlinePrint } = require('../utils')

// use createStore function to create a new store object
const store = createStore(reducer)

underlinePrint('Interacting with the Redux store:')

console.log(`The store object ->`)
console.log(store)

console.log('\nThe current state of the store ->')
console.log(store.getState())

// sending an action to the store to add a bug
addBug1 = {
  type: 'ADD_BUG',
  payload: {
    description: 'This is bug 1'
  }
}

store.dispatch(addBug1)

console.log('\nUpdated state in the store after sending addBug1 action ->')
console.log(store.getState())
