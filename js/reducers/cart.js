import { combineReducers } from 'redux';

import {
  ADD_CART_ITEM,
  REMOVE_CART_ITEM,
  SHOW_TOTAL_COST,
  ADD_QUANTITY,
  SET_CHECK_FILTER,
  UPDATE_CART_COST,
  PLUS_QUANTITY,
  MINUS_QUANTITY,
  CHANGE_QUANTITY,
  UPDATE_CART_STATUS,
  CART_CHECK_OUT,
  CHANGE_CART_ITEM_SELECTED,
  CHANGE_ALL_CART_ITEM_SELECTED,
  CheckCartStatus } from "../actions/cart.js";

import {ADD_PRODUCT_TO_CART} from "../actions/cart.js";

function cartCost(state = 0, action){
  switch (action.type) {
    case UPDATE_CART_COST:
      let new_state = 0;
      for (var i = 0; i < action.items.length; i++) {
        if (action.items[i].checked == true) {
            new_state = new_state + action.items[i].cost;
        }
        if ( action.items[i].checked == false) {
          continue;
        }
      }
      console.log(new_state);
      return new_state;
      break;
    case CART_CHECK_OUT:
      return 0;
      break;

    default:
      return state;

  }

}

function cartStatus(state = CheckCartStatus.SELECT_ALL, action){
  switch (action.type) {
    case CheckCartStatus.SELECT_ALL:
      return CheckCartStatus.SELECT_ALL;
      break;
    case CheckCartStatus.UNSELECT_ALL:
      return CheckCartStatus.UNSELECT_ALL;
      break;
    case CheckCartStatus.ALL_UNSELECT:
      return CheckCartStatus.ALL_UNSELECT;
      break;
    case CART_CHECK_OUT:
      return CheckCartStatus.SELECT_ALL;
    default:
      return state;
      break;

  }


}


function cartItems(state = [], action){
  switch (action.type) {
    case CART_CHECK_OUT:
      return [];
    case ADD_CART_ITEM:
      let old_item = state;
      for (var i = 0; i < old_item.length; i++) {
        if (old_item[i].id == action.item.id) {
          old_item[i].quantity++;
          let old_item_cost = old_item[i].quantity*old_item[i].price;
          old_item_cost = Math.round(old_item_cost*100)/100;
          old_item[i].cost = old_item_cost;
          return old_item;
          break;
        }else{
          continue;
        }
      }
      let new_item = new Object();
      new_item.id = action.item.id;
      new_item.checked = true;
      new_item.title = action.item.title;
      new_item.imageUrl = action.item.imageUrl;
      new_item.quantity = 1;
      new_item.price = action.item.price;
      new_item.cost = action.item.price;
      return [...state, new_item];
      break;

    case REMOVE_CART_ITEM:
      let removedState = new Array();
      for (var i = 0; i < state.length; i++) {

        if (i == Number(action.index)) {
          continue;
        }else{
          removedState.push(state[i]);
        }

      }
      return removedState;

      break;


    case CHANGE_ALL_CART_ITEM_SELECTED:
        let all_select_items = state;
        for (var i = 0; i < all_select_items.length; i++) {
          all_select_items[i].checked = action.checked;
        }
        return all_select_items;
        break;

    case CHANGE_CART_ITEM_SELECTED:
        let checked_to_change = state[action.index].checked;
        checked_to_change = !checked_to_change;
        let objs = [
          ...state.slice(0, action.index),
          Object.assign({}, state[action.index], {
            checked: checked_to_change
          }),
          ...state.slice(action.index+1)
        ];
        return objs;
        break;

    case PLUS_QUANTITY:
        let quantity_plus = state[action.index].quantity+1;
        let price_plus = state[action.index].price;
        let cost_plus = quantity_plus*price_plus;
        cost_plus = Math.round(cost_plus*100)/100;
        return [
          ...state.slice(0, action.index),
          Object.assign({}, state[action.index], {
            quantity: quantity_plus,
            cost: cost_plus
          }),
          ...state.slice(action.index+1)
        ];
        break;
    case MINUS_QUANTITY:
        let quantity_minus = state[action.index].quantity-1;
        if (state[action.index].quantity <= 1) {
          //购物车单品数量不得小于1
            quantity_minus = 1;
        }
        let price_minus = state[action.index].price;
        let cost_minus = quantity_minus*price_minus;
        cost_minus = Math.round(cost_minus*100)/100;
        return [
          ...state.slice(0, action.index),
          Object.assign({}, state[action.index], {
            quantity: quantity_minus,
            cost: cost_minus
          }),
          ...state.slice(action.index+1)
        ];
        break;

    case CHANGE_QUANTITY:
      let quantity_change = action.quantity;
      if (state[action.index].quantity < 1) {
        //购物车单品数量不得小于1
        quantity_change = 1;
      }
      let price_change = state[action.index].price;
      let cost_change = quantity_change*price_change;
      cost_change = Math.round(cost_change*100)/100;
      return [
        ...state.slice(0, action.index),
        Object.assign({}, state[action.index], {
          quantity: quantity_change,
          cost: cost_change
        }),
        ...state.slice(action.index+1)
      ];
      break;
      case CART_CHECK_OUT:
        return [];
        break;

    default:
      return state;

  }

}

const CartReducer = combineReducers({
  cartStatus,
  cartItems,
  cartCost
});

export default CartReducer;
