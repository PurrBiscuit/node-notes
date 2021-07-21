const { 
  ADD_TODO,
  REMOVE_TODO,
  UPDATE_STATUS,
 } = require('./actionTypes')

const addTodo = payload => ({
  type: ADD_TODO,
  payload
})

const removeTodo = payload => ({
  type: REMOVE_TODO,
  payload
})

const updateStatus = payload => ({
  type: UPDATE_STATUS,
  payload
})

module.exports = {
  addTodo,
  removeTodo,
  updateStatus,
}
