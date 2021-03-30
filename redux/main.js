// this main.js file is simulating a bug tracking app
// that we're going to implement with Redux for state management
const { createStore } = require('redux')
const reducer = require('./reducer')
const {
  addBug,
  removeBug,
  resolveBug
} = require('./actions')

const { underlinePrint } = require('../utils')

// use createStore function to create a new store object
const store = createStore(reducer)

underlinePrint('Interacting with the Redux store:')

console.log(`The store object ->`)
console.log(store)

console.log('\nThe current state of the store ->')
console.log(store.getState())

// sending an action to the store to add a bug
store.dispatch(addBug('This is bug 1'))

console.log('\nUpdated state in the store after sending addBug1 action ->')
console.log(store.getState())

// add three more bugs to the store
store.dispatch(addBug('This is bug 2'))
store.dispatch(addBug('This is bug 3'))
store.dispatch(addBug('This is bug 4'))

console.log('\nUpdated state in the store after sending three add bug actions ->')
console.log(store.getState())

// remove bug number 3
store.dispatch(removeBug(3))
console.log('\nUpdated state in the store after removing bug three ->')
console.log(store.getState())

// resolve bug number 2
store.dispatch(resolveBug(2))
console.log('\nUpdated state in the store after resolving bug two ->')
console.log(store.getState())
