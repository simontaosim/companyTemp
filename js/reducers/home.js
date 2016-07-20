import { combineReducers } from 'redux';

import {
  SHOW_PRODUCTS
 } from "../actions/home.js";

function products(state=[], action) {
  switch (action.type) {
    case SHOW_PRODUCTS:
      return action.products;
      break;
    default:
    return state;

  }
}
const HomeReducer = combineReducers({
  products
});

export default HomeReducer;
