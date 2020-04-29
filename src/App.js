import React from "react";
// components
import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
// items
import cartItems from "./cart-items";
import { createStore } from "redux";
// redux stuff

const initStore = {
  count: 0,
  name: "Sarayu",
};

const DECREASE = "DECREASE";
function reducer(state, action) {
  console.log({ state, action });
  if (action.type === DECREASE) {
    return { ...state, count: state.count - 1 };
  }
  if (action.type === "INCREASE") {
    return { ...state, count: state.count + 1 };
  }
  if (action.type === "RESET") {
    return { ...state, count: 0 };
  }
  if (action.type === "CHANGENAME") {
    return { ...state, name: "Shrawan" };
  }
  return state;
}
const store = createStore(reducer, initStore);
store.dispatch({ type: "INCREASE" });
store.dispatch({ type: "CHANGENAME" });
store.dispatch({ type: DECREASE });
store.dispatch({ type: "RESET" });
store.dispatch({ type: "INCREASE" });

console.log(store.getState());
function App() {
  // cart setup

  return (
    <main>
      <Navbar cart={store.getState()} />
      <CartContainer cart={cartItems} />
    </main>
  );
}

export default App;
