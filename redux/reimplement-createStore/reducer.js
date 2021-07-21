const {
  ADD_TODO,
  REMOVE_TODO,
  UPDATE_STATUS
} = require('./actionTypes')

const reducer = (state = { todos: [], status: 'successful' }, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [ ...state.todos, action.payload ]
      }
    case REMOVE_TODO:
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.payload.id)
      }
    case UPDATE_STATUS:
      return {
        ...state,
        status: action.payload
      }
    default:
      return state
  }
}

module.exports = reducer
