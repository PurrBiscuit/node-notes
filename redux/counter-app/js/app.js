// initialize all the Redux stuff here

const DECREMENT = 'DECREMENT'
const INCREMENT = 'INCREMENT'

const reducer = (state = { value: 0 }, action) => {
  switch (action.type){
    case INCREMENT:
      return { value: state.value + 1 }
    case DECREMENT:
      return { value: state.value - 1 }
    default:
      return state
  }
}

// create the Redux store for the app.
// the first argument is the reducer we defined above.
// the second argument is to enable redux devtools to log actions
// and state information via the Redux extension installed on my browser.
const store = Redux.createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__({ trace: true }))

// configure the app to update items in the DOM based on Redux
const counterValue = document.getElementById('counter-value')
const decrementButton = document.getElementById('decrement')
const incrementButton = document.getElementById('increment')

// add onClick event listener to the decrement button to
// send DECREMENT type events to the Redux store.
decrementButton.addEventListener('click', () => {
  store.dispatch({ type: DECREMENT })
})

// add onClick event listener to the increment button to
// send INCREMENT type events to the Redux store.
incrementButton.addEventListener('click', () => {
  store.dispatch({ type: INCREMENT })
})

// subscribe a function to the store that will
// set the value of the counter in the DOM to
// the current value from state in the store.
store.subscribe(() => {
  counterValue.innerText = store.getState().value
})
