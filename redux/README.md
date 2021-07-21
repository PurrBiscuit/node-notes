# Redux

## References

- [Egghead.io - Fundamentals of Redux Course from Dan Abramov](https://egghead.io/lessons/react-redux-the-single-immutable-state-tree)
- [Redux NPM Page](https://www.npmjs.com/package/redux)
- [Youtube - Redux Tutorial](https://www.youtube.com/watch?v=poQXNp9ItL4)

## Overview

Redux is a library used for application state management.  It's described as a "predicatable state container for Javascript apps" from the [Redux docs on npm](https://www.npmjs.com/package/redux).

## Three Principles of Redux

[Redux Three Principles](https://redux.js.org/understanding/thinking-in-redux/three-principles)

1. `Single source of truth` - The global `state` of your application is stored in an object tree within a single `store`.
2. `State is read-only` - The only way to change the state is to emit an `action`, an object describing what happened.
3. `Changes are made with pure functions` - To specify how the state tree is transformed by actions, you write pure `reducers`.  Reducers are just pure functions that take the previous state and an action, and return the next state.

## Redux Terminology

### Store

The central location where state is held.  A store object can be created using the `createStore` Redux function.  The `createStore` function takes a function as its argument.  This function is called a `reducer`.  The `reducer` function is what makes the updates to the state in the Redux store based on the actions it receives from the `dispatch` method.

The store object also has several methods that can be used to interact with the state and send out store events to listeners.  These methods include:

- `dispatch` - takes an `action` object that describes the `type` of action to take and a payload that's to be used to update the state with.
- `getState` - doesn't take an argument; simply returns the current state from the store.
- `replaceReducer` - takes a `reducer` function that the store will use going forward to parse dispatch actions and update state with.
- `subscribe` - takes a `listener` and will send state update events to those listeners.

### Reducer

The reducer is a function that's defined to accept the `state` object and an `action` object as its arguments.  It will take the `action` object and perform updates to the `state` object based on the action type that was sent to the reducer function via the `dispatch` method.  The reducer will return an updated `state` object - it will NOT modify the `state` object that was passed to it directly.  The `state` object should be treated as an immutable object and never updated (mutated) directly.  Common ways to do this include using the spread operator to copy the existing `state` object into a new object, and the return that new object from the `reducer` function.

Remember, reducer's are pure functions.  They don't touch global state, they don't mutate their arguments and they don't have any side effects.  They just get the current `state` instance and return an updated one.

```javascript
const reducer = (state, action) => {
  // do some things to the state object here based on the action sent to the reducer
}
```

You can then pass the reducer function to the `createStore` Redux function to create a new `store` object for use in an application.

```javascript
const { createStore } = require('redux')

const store = createStore(reducer)
```

All the updates to a Redux `state` do not need to happen with a single reducer.  If there are many different fields in a `state` object then different reducers can be created to handle the different fields in the store separately.  For example, a store with four different fields (slices):

```javascript
{
  categories: [],
  products: [],
  cart: {},
  user: {}
}
```

Each field (slice) can be managed by a separate reducer function.  You do, however, need to combine all the separate reducers that manage slices of the `state` into a final, rootReducer function.  This rootReducer function would then be passed to the `createStore` function.  An example would look like:

```javascript
const toDoReducer = (state = [], action) => {
  switch (action.type) {
    case 'todo/ADD_TODO':
      return [ ...state, action.payload ]
    default:
      return state
  }
}

const counterReducer = (state = { value: 0 }, action) => {
  switch (action.type) {
    case 'counter/INCREMENT':
      return { value: state.value + 1 }
    default:
      return state
  }
}

const rootReducer = (state = {}, action) => ({
  counter: counterReducer(state.counter, action),
  todos: toDoReducer(state.todos, action)
})
```

### Action

Actions in Redux can also be thought of as "events".  Action objects are created to represent certain actions that a user can perform in the application, like `ADD_ITEM` to add an item to their cart.  Each action object in Redux needs a `type` property associated with it.  This `type` property will tell the `reducer` what sort of action was performed and what updates to the `state` object need to happen based on that action.

## The Redux Flow

There are several steps that happen to update the `store` object in Redux.  The basic flow looks like the following:

![Image 2021-03-29 at 5 30 16 PM](https://user-images.githubusercontent.com/4661524/112902690-7d8f7a00-90b4-11eb-9e5b-a3c8c1b17c23.jpg)

From the image above, the following steps are performed with Redux to update application state in the `store`.

1.) When a user performs an action, an `action` object is created and sent to the `store` via the `dispatch` method on the `store`.
2.) The `store` then forwards this `action` to the `reducer` function.  We don't call the `reducer` function directly, ever.  The reducer is always called through the `store` only.
3.) The `reducer` function will compute the new state and returns it to the `store`.
4.) The `store` will set the state internally and notify the UI components of the update.
5.) UI components will refresh themselves with this new data as needed.
