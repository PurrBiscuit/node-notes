// a very simple reimplementation of the createStore
// function from the redux npm package

const createStore = reducer => {
  let state

  // method used to pass actions to the reducer.
  // this will call the reducer by passing in the current
  // state from the store and the action passed to the dispatch method.
  const dispatch = action => {
    state = reducer(state, action)
  }

  // simply returns the state from the store
  const getState = () => state

  // call dispatch immediately without an action to trigger
  // the default case in the reducer.  this should return a default
  // initial setting for the state, as defined in the reducer
  // when state is passed to it as undefined.
  dispatch({})

  // returns a store object with two methods for its API
  return { dispatch, getState }
}

module.exports = createStore
