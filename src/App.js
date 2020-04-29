import React from "react";
// components
import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
// items
import cartItems from "./cart-items";
import { createStore } from "redux";
import { reducer } from "./reducer";
// redux stuff
import { Provider } from "react-redux";
const initStore = {
  cart: cartItems,
  total: 100,
  amount: 5,
};

const store = createStore(reducer, initStore);

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
