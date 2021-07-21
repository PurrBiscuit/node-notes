const createStore = require('./createStore')
const reducer = require('./reducer')

const {
  addTodo,
  removeTodo,
  updateStatus,
} = require('./actionCreators')

console.log(reducer)

const { underlinePrint } = require('../../utils')

underlinePrint('creating the store...')
const store = createStore(reducer)

underlinePrint('checking the initial state value from the store:')
console.log(store.getState())

underlinePrint('dispatching some actions to the store:')
store.dispatch(addTodo({ id: 0, value: 'do some chores' }))
store.dispatch(addTodo({ id: 1, value: 'feed the dog' }))
store.dispatch(addTodo({ id: 2, value: 'chill out' }))
store.dispatch(updateStatus('processing'))

underlinePrint('checking the state value from the store after the dispatches:')
console.log(store.getState())

underlinePrint('dispatching some more actions to the store:')
store.dispatch(removeTodo({ id: 0 }))
store.dispatch(addTodo({ id: 3, value: 'watch TV' }))
store.dispatch(addTodo({ id: 4, value: 'study' }))
store.dispatch(removeTodo({ id: 2 }))
store.dispatch(updateStatus('complete'))

underlinePrint('checking the state value from the store after the latest dispatches:')
console.log(store.getState())
