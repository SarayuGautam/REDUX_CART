import {
  INCREASE,
  DECREASE,
  CLEAR_CART,
  REMOVE,
  GET_TOTALS,
  TOGGLE_AMOUNT,
} from "./actions";
import cartItems from "./cart-items";

const initStore = {
  cart: cartItems,
  total: 0,
  amount: 0,
};
export function reducer(state = initStore, action) {
  switch (action.type) {
    case CLEAR_CART:
      return { ...state, cart: [] };

    case REMOVE:
      return {
        ...state,
        cart: state.cart.filter(
          (cartItem) => cartItem.id !== action.payload.id
        ),
      };

    case DECREASE:
      let tempCart = state.cart.map((cartItem) => {
        if (cartItem.id === action.payload.id) {
          cartItem = { ...cartItem, amount: cartItem.amount - 1 };
        }
        return cartItem;
      });

      return { ...state, cart: tempCart };

    case INCREASE:
      let tempcart = state.cart.map((cartItem) => {
        if (cartItem.id === action.payload.id) {
          cartItem = { ...cartItem, amount: cartItem.amount + 1 };
        }
        return cartItem;
      });
      return {
        ...state,
        cart: tempcart,
      };
    case GET_TOTALS:
      let { total, amount } = state.cart.reduce(
        (cartTotal, cartItem) => {
          const { price, amount } = cartItem;
          const itemTotal = price * amount;
          cartTotal.total += itemTotal;
          cartTotal.amount += amount;
          return cartTotal;
        },
        {
          total: 0,
          amount: 0,
        }
      );
      total = parseFloat(total.toFixed(2));
      return { ...state, total, amount };
    case TOGGLE_AMOUNT:
      return {
        ...state,
        cart: state.cart.map((cartItem) => {
          if (cartItem.id === action.payload.id) {
            if (action.payload.toggle === "inc") {
              return (cartItem = { ...cartItem, amount: cartItem.amount + 1 });
            }
            if (action.payload.toggle === "dec") {
              return (cartItem = { ...cartItem, amount: cartItem.amount - 1 });
            }
          }
          return cartItem;
        }),
      };
    default:
      return state;
  }
}
