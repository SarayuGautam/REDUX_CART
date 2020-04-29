import { INCREASE, DECREASE, CLEAR_CART, REMOVE, GET_TOTALS } from "./actions";

export function reducer(state, action) {
  // if (action.type === CLEAR_CART) {
  //   return { ...state, cart: [] };
  // }
  // return state;
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
      let tempCart = [];
      if (action.payload.amount === 1) {
        tempCart = state.cart.filter(
          (cartItem) => cartItem.id !== action.payload.id
        );
      } else {
        tempCart = state.cart.map((cartItem) => {
          if (cartItem.id === action.payload.id) {
            cartItem = { ...cartItem, amount: cartItem.amount - 1 };
          }
          return cartItem;
        });
      }
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
        (cardTotal, cartItem) => {
          const { price, amount } = cartItem;
          cardTotal.amount += amount;
          return cardTotal;
        },
        {
          total: 0,
          amount: 0,
        }
      );
      return { ...state, total, amount };
    default:
      return state;
  }
}
