const {
  ADD_BUG,
  REMOVE_BUG,
  RESOLVE_BUG
} = require('./actionTypes')

let lastId = 0

// this reducer function will respond to two action types:
// 1. ADD_BUG - will add a bug to our fake
//    bug tracking application's state
// 2. REMOVE_BUG - will remove a bug from state based on id in payload.

// in our example app, the state is a simple array that
// will contain all of our bugs that we're tracking
const reducer = (state = [], action) => {
  switch (action.type) {
  case ADD_BUG:
    return [
      ...state,
      {
        id: ++lastId,
        description: action.payload.description,
        resolved: false
      }
    ]
  case REMOVE_BUG:
    return state.filter(({ id }) =>
      action.payload.id !== id
    )
  case RESOLVE_BUG:
    return state.map(bug =>
      action.payload.id !== bug.id
        ? bug
        : {
          ...bug,
          resolved: true
        }
      )
  default:
    return state
  }
}

module.exports = reducer
