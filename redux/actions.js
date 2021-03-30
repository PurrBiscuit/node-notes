const {
  ADD_BUG,
  REMOVE_BUG,
  RESOLVE_BUG
} = require('./actionTypes')

const addBug = description => ({
  type: ADD_BUG,
  payload:{
    description
  }
})

const removeBug = id => ({
  type: REMOVE_BUG,
  payload:{
    id
  }
})

const resolveBug = id => ({
  type: RESOLVE_BUG,
  payload:{
    id
  }
})

module.exports = {
  addBug,
  removeBug,
  resolveBug
}
