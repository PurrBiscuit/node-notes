# React Redux

## References

- [Getting Started](https://react-redux.js.org/introduction/getting-started)

## Overview

React Redux if the official React UI bindings layer for Redux.  It lets your React components read data from a Redux store, and dispatch actions to the store to update state.

## API

### Connect

- [Connect Overview](https://react-redux.js.org/api/connect)

The `connect` function connects a React component to a Redux store.  It provides a way for the connected component to receive data from a Redux store through its props, as well as a way for the connected component to update state in the Redux store.

```javascript
const connect = (mapStateToProps?, mapDispatchToProps?, mergeProps?, option?)
```

The `connect` function accepts four arguments, all optional:

1. `mapStateToProps` - `function`; Deals with the Redux store's state.  Will call `store.getState()` to get the current state from the Redux store following a dispatched action event.  Returns a plain, old Javascript object (POJO) based on the Redux state to the `props` for the connected component to use.
2. `mapDispatchToProps` - `functions || object`; Deals with the Redux store's dispatch method.  Return a POJO with each of the fields of the object being a function.  Each of the functions are expected to dispatch an action to the store.
3. `mergeProps` - `function`; if specified, defines how the final props for your own wrapped component are determined.
4. `option` - `object`; options object that can be passed to further configure the `connect` function.

### mapStateToProps

- [Extracting Data with `mapStateToProps`](https://react-redux.js.org/using-react-redux/connect-mapstate)

If a `mapStateToProps` function is given to the `connect` function then the new wrapper component will **subscribe** to Redux store updates (aka. listen for events from the Redux store).  This means that anytime the store is updated, `mapStateToProps` will be called.  The results of `mapStateToProps` must be a plain object, which will be merged into the wrapped component's props.  If you don't want to subscribe to store updates, pass `null` or `undefined` in place of `mapStateToProps` in the call to the `connect` function.

`mapStateToProps` takes two parameters:

1. `state` - `Object`
2. `ownProps?` - `Object` (optional)

If the `mapStateToProps` function is only defined to take one parameter (`state`) then it will be called and given the current store state as the argument, whenever the Redux store is updated.  If it takes two parameters (`state` and `ownProps`) then it will be called whenever Redux store state changes OR when the wrapper component receives new props from upstream.

`mapStateToProps` functions are expected to return a plain object, commonly referred to as `stateProps`.  This object will be merged as props to your connected component.  The return of `mapStateToProps` determines whether a connected component will re-render.

#### Useage Guidelines for mapStateToProps

**Let `mapStateToProps` Reshape the Data from the Store**

`mapStateToProps` can, and should, do a lot more than just `return state.someSlice`.  They have the responsibility of "re-shaping" store data as needed for that component.

**Use Selector Functions to Extract and Transform Data**

Selector functions can be used to help encapsulate the process of extracting values from specific locations in the state tree, as well as improve application performance.

**`mapStateToProps` Functions Should Be Fast**

Whenever the store changes, all of the `mapStateToProps` functions of all of the connected components will run.  A slow `mapStateToProps` can be a potential bottleneck for your application.  If performance is a concern, ensure that these transformations are only run if the input values have changed.

**`mapStateToProps` Functions Should Be Pure and Synchronous**

Like a Redux reducer, a `mapStateToProps` function should always be 100% pure and synchronous.  It should not mutate the arguments it's given and should return a new props object.  It should not be used to trigger asynchronous behavior like AJAX calls for data fetching.

### mapDispatchToProps

- [Dispatching Actions with `mapDispatchToProps`](https://react-redux.js.org/using-react-redux/connect-mapdispatch)

If a `mapDispatchToProps` function is given to the `connect` function then the new wrapper component will be able to send specific actions via `dispatch` to the Redux store.  Actions are sent via `dispatch` to update the state in the Redux store based on user actions or application events.  Your component will receive `dispatch` by default when you do not supply a second parameter to `connect`.

`mapDispatchToProps` takes two parameters:

1. `dispatch` - `function`
2. `ownProps?` - `object` (optional)

The `dispatch` function is the `dispatch` method from the Redux store object.  If the function is defined to take a second parameter, `ownProps`, it will be re-invoked whenever new props are passed to the wrapper component.

`mapDispatchToProps` functions are expected to return a plain object, commonly referred to as `dispatchProps`.  It will be merged as props to your connected component.  Each of the fields of the returned object has to be a function itself.  These functions will be accessible via the component's props, meaning they can be called like so - `this.props.addItem()`.  An example of a `mapDispatchToProps` function that returns an object with two fields to the wrapped component:

```javascript
const mapDispatchToProps = dispatch => ({
  addItem: id => dispatch({ type: 'ADD_ITEM', payload: { id } }),
  removeItem: id => dispatch({ type: 'REMOVE_ITEM', payload: { id } })
})
```

Using the example above, if this function where passed into `connect` as the second argument (ie. `connect(null, mapDispatchToProps)`), then the wrapped component would receive two additional props called `addItem` and `removeItem` in addition to any props received from parent components.  These two props are functions and could be called within the component to send `dispatch` actions to the Redux store to update state.  An example of calling one of those functions based on a user's action could look like:

```javascript
const someComponent = props => {
  const addItem = id => {
    console.log('Adding an item to the cart!')

    // calling the addItem dispatch method from the props object
    props.addItem(id)
  }

  return (
    <>
      <h1>Welcome to the store</h1>
      <button onSubmit=addItem(1)>Add Item</button>
    </>
  )
}
```

`mapDispatchToProps` may be an object where each field is an action creator.  In this case, React-Redux binds the `dispatch` of your store to each of the action creators using `bindActionCreators`.  An example of using an object instead of function for `mapDispatchToProps`:

```javascript
import { addTodo, deleteTodo, toggleTodo } from './actionCreators'

const mapDispatchToProps = {
  addTodo,
  deleteTodo,
  toggleTodo,
}

export default connect(null, mapDispatchToProps)(TodoApp)
```

#### Approaches for Dispatching

If you don't specify a `mapDispatchToProps` function as the second argument to `connect` then your connected component will receive `dispatch` by default.  For example:

```javascript
connect(mapStateToProps)(MyComponent)
```

Will result in the `dispatch` function being directly accessible in the `MyComponent` component now via it's props.  For example:

```javascript
const MyComponent = props => {
  return (
    <div>
      <button onClick={() => props.dispatch({ type: 'INCREMENT' })}>+</button>
    </div>
  )
}
```

Providing a `mapDispatchToProps` allows you to specify which actions your component might need to dispatch.  The benefits of providing action dispatching functions directly, instead of the default `dispatch` passed as a prop to your component include:

1. More Declarative - Encapsulating the dispatch logic into functions makes the implementation more declarative.  Doesn't expose the `dispatch` function itself to the component, but rather individual functions that implement the `dispatch` functionality under-the-hood with a descriptive name, like `increment`.
2. Pass Down Action Dispatching Logic to (Unconnected) Child Components - Gives you the ability to pass down the action dispatching function to child components.  This allows more components to dispatch actions, while keeping them "unaware" of Redux.
