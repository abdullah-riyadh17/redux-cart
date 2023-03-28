import React from "react";
// components
import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
// items
import cartItems from "./cart-items";
// redux stuff

// store - stores data, think of state
// reducer - function that used to update store
// two arguments- state, action
// state - old state / state before update
// action - what happened / what update
// return updated or old state

import { createStore } from "redux";

import reducer from "./reducer";
import { Provider } from "react-redux";
// dispatch method - send an actions to the store
// actions(objects)- MUST HAVE TYPE PROPERTY- what kind of action
// DON'T MUTATE THE STATE - redux built on IMMUTABILITY(copy)

// store.getState()- get state effectively

// react-redux - provider - wraps app , connect - used in components

// initial store
const initialStore = {
  cart: cartItems,
  total: 105,
  amount: 5,
};

// store
const store = createStore(reducer, initialStore);

function App() {
  // cart setup

  return (
    <Provider store={store}>
      <Navbar />
      <CartContainer />
    </Provider>
  );
}

export default App;
