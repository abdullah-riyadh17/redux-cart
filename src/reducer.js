import { INCREASE, DECREASE, CLEAR_CART, REMOVE, GET_TOTALS } from "./action";

// reducer
function reducer(state, action) {
  console.log({ state, action });
  if (action.type === CLEAR_CART) {
    return { ...state, cart: [] };
  }
  if (action.type === REMOVE) {
    console.log(action.payload.id);
    return {
      ...state,
      cart: state.cart.filter((cartItem) => cartItem.id !== action.payload.id),
    };
  }
  if (action.type === INCREASE) {
    let tempCart = state.cart.map((cartItem) => {
      if (cartItem.id === action.payload.id) {
        cartItem = { ...cartItem, amount: cartItem.amount + 1 };
      }
      return cartItem;
    });
    return {
      ...state,
      cart: tempCart,
    };
  }
  if (action.type === DECREASE) {
    let tempCart = [];
    if (action.payload.amount === 1) {
      tempCart = state.cart.filter(
        (cartItem) => (cartItem = cartItem.id !== action.payload.id)
      );
    } else {
      tempCart = state.cart.map((cartItem) => {
        if (cartItem.id === action.payload.id) {
          cartItem = { ...cartItem, amount: cartItem.amount - 1 };
        }
        return cartItem;
      });
    }
    console.log(tempCart);
    return {
      ...state,
      cart: tempCart,
    };
  }

  if (action.type === GET_TOTALS) {
    let { total, amount } = state.cart.reduce(
      (cartTotal, cartItem) => {
        const { price, amount } = cartItem;
        console.log({ price, amount });
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
    total = parseFloat(total).toFixed(2);
    return { ...state, total, amount };
  }

  return state;
}
export default reducer;

//   return state;
/* switch (action.type) {
  case CLEAR_CART:
    return { ...state, cart: [] };
  case REMOVE:
    console.log(REMOVE);
  case INCREASE:
    console.log(INCREASE);
  case DECREASE:
    console.log(DECREASE);
  case GET_TOTAL:
    console.log(GET_TOTAL);

  default:
    return state;
} */

/* if (action.type === DECREASE) {
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
  return {
    ...state,
    cartItem: tempCart,
  };
} */
