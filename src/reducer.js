import { INCREASE, DECREASE, CLEAR_CART, REMOVE, GET_TOTAL } from "./action";

// reducer
function reducer(state, action) {
  console.log({ state, action });

  switch (action.type) {
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
  }
}
export default reducer;

//   if (action.type === CLEAR_CART) {
//     return { ...state, cart: [] };
//   }
//   return state;
