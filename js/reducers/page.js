import { combineReducers } from 'redux';

import {
  CHANGE_PAGE_MENU_ACTIVE
} from "../actions/page.js";

let initState = "home"

function menuKeys(state=initState, action) {
  switch (action.type) {
    case CHANGE_PAGE_MENU_ACTIVE:
      return action.keys;
      break;
    default:
    return state;

  }
}
const page = combineReducers({
  menuKeys
});

export default page;
