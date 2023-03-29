import { INCREASE, DECREASE, CLEAR_CART, REMOVE, GET_TOTAL } from "./action";

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
      cart: state.cart.filter(
        (cartItems) => cartItems.id !== action.payload.id
      ),
    };
  }
  if (action.type === INCREASE) {
    console.log(INCREASE);
  }
  if (action.type === DECREASE) {
    console.log(DECREASE);
  }
  if (action.type === GET_TOTAL) {
    console.log(GET_TOTAL);
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
