import { combineReducers } from 'redux';

import {
  UNCHECKED_OUT_CART_ITEM_COUNT
} from "../actions/app.js";

function cartMassage(state=0, action) {
  switch (action.type) {
    case UNCHECKED_OUT_CART_ITEM_COUNT:
      return action.number;
      break;
    default:
    return state;

  }

}
const AppReducer = combineReducers({
  cartMassage
});

export default AppReducer;
