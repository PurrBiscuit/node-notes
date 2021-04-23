# Redux

## References

- [Redux NPM Page](https://www.npmjs.com/package/redux)
- [Youtube - Redux Tutorial](https://www.youtube.com/watch?v=poQXNp9ItL4)

## Overview

Redux is a library used for application state management.  It's described as a "predicatable state container for Javascript apps" from the [Redux docs on npm](https://www.npmjs.com/package/redux).

## Redux Terminology

### Store

The central location where state is held.  A store object can be created using the `createStore` Redux function.  The `createStore` function takes a function as it's argument.  This function is called a `reducer`.  The `reducer` function is what makes the updates to the state in the Redux store based on the actions it receives from the `dispatch` method.

The store object also has several methods that can be used to interact with the state and send out store events to listeners.  These methods include:

- `dispatch` - takes an `action` object that describes the `type` of action to take and a payload that's to be used to update the state with.
- `getState` - doesn't take an argument; simply returns the current state from the store.
- `replaceReducer` - takes a `reducer` function that the store will use going forward to parse dispatch actions and update state with.
- `subscribe` - takes a `listener` and will send state update events to those listeners.

### Reducer

The reducer is a function that's defined to accept the `store` object and an `action` argument.  It will take the `action` item and perform updates to the `store` object based on the action type that was sent to the reducer function via the `dispatch` method.  The reducer will return an updated `store` object - it will NOT modify the `store` object that was passed to it directly.  The `store` object should be treated as an immutable object and never updated (mutated) directly.  Common ways to do this include using the spread operator to copy the existing `store` object into a new object, and the return that new object from the `reducer` function.

Remember, reducer's are pure functions.  They don't touch global state, they don't mutate their arguments and they don't have any side effects.  They just get the current store instance and return an updated one.

```javascript
const reducer = (store, action) => {
  // do some things to the store object here based on the action sent to the reducer
}
```

You can then pass the reducer function to the `createStore` Redux function to create a new `store` object for use in an application.

```javascript
const { createStore } = require('redux')

const store = createStore(reducer)
```

All the updates to a Redux store do not need to happen with a single reducer.  If there are many different fields in a `store` object then different reducers can be created to handle the different fields in the store separately.  For example, a store with four different fields (slices):

```javascript
{
  categories: [],
  products: [],
  cart: {},
  user: {}
}
```

Each field (slice) can be managed by a separate reducer function.

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
