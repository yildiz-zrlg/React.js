import * as actionsTypes from "../actions/actionTypes";
import initialState from "./initialState";

export default function cartReducer(state = initialState.cart, action) {
  switch (action.type) {
    case actionsTypes.ADD_TO_CART:
      var addedItem = state.find(
        (c) => c.product.Id === action.payload.product.Id
      );
      if (addedItem) {
        var newState = state.map((cartItem) => {
          if (cartItem.product.Id === action.payload.product.Id) {
            return Object.assign({}, addedItem, {
              quantity: addedItem.quantity + 1
            })
          }
          return cartItem;
        })
        return newState;
      } else {
        return [...state, { ...action.payload }];
      }
    case actionsTypes.REMOVE_FROM_CART:
      const newState2 = state.filter(
        (cartItem) => cartItem.product.Id !== action.payload.Id
      );
      return newState2; 
    default:
      return state;
  }
}
