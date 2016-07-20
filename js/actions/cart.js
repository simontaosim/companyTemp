import {setCartMassage} from "./app";
import { push } from 'react-router-redux';
import {setCurrentOrder} from "./newOrder";
/*
  action类型
*/
export const ADD_CART_ITEM = "ADD_CART_ITEM";

export const REMOVE_CART_ITEM = "REMOVE_CART_ITEM";

export const SET_CHECK_FILTER = "SET_CHECK_FILTER";

export const SHOW_TOTAL_COST = "SHOW_TOTAL_COST";

export const PLUS_QUANTITY = "PLUS_QUANTITY";

export const MINUS_QUANTITY = "MINUS_QUANTITY";

export const CHANGE_QUANTITY = "CHANGE_QUANTITY";

export const UPDATE_CART_COST = "UPDATE_CART_COST";

export const CART_CHECK_OUT = "CART_CHECK_OUT";

export const CHANGE_CART_ITEM_SELECTED = "CHANGE_CART_ITEM_SELECTED"
export const CHANGE_ALL_CART_ITEM_SELECTED = "CHANGE_ALL_CART_ITEM_SELECTED";
export const GENERATE_NEW_ORDER_BY_CART = "GENERATE_NEW_ORDER_BY_CART";




// 其他常量

export const CheckCartStatus = {
  SELECT_ALL: "SELECT_ALL",
  UNSELECT_ALL: "UNSELECT_ALL",
  ALL_UNSELECT: "ALL_UNSELECT"
};

export function addCartItem(item){
  return {type: ADD_CART_ITEM, item};
}

export function removeCartItem(index){
  return { type: REMOVE_CART_ITEM, index};
}

export function setCartStatus(status){
  return { type: status }
}

export function updateCartStatus(items){
  let allSelect = true;
  let allUnSelect = false;
  for (var i = 0; i < items.length; i++) {
    allSelect = allSelect && items[i].checked;
    allUnSelect = allUnSelect || items[i].checked;
  }
  if (allSelect==true) {
    return {type: CheckCartStatus.SELECT_ALL};
  }
  if (allUnSelect==false) {
    return {type: CheckCartStatus.ALL_UNSELECT};
  }
  return {type: CheckCartStatus.UNSELECT_ALL};

}


export function changeCartItemSelected(index){
  return {type: CHANGE_CART_ITEM_SELECTED, index}
};

export function changeAllCartItemSelected(checked){
  return {type: CHANGE_ALL_CART_ITEM_SELECTED, checked}
};

export function plusQuantity(index){
  return {type: PLUS_QUANTITY, index}
}
export function minusQuantity(index){
  return {type: MINUS_QUANTITY, index}
}

export function changeQuantity(index, quantity){
    return {type: CHANGE_QUANTITY, index, quantity}
}

export function updateCartCost(items){
  return {type: UPDATE_CART_COST, items};
}


export function cartChectOut(){
  return {type: CART_CHECK_OUT};
}
export function generateNewOrderByCart(cartItems, cartCost){
  return {type: GENERATE_NEW_ORDER_BY_CART, cartItems, cartCost}
}
export function checkOutAndGenerateNewOrderByCart(cartItems, cartCost){
  return (dispatch, getState) => {
    dispatch(generateNewOrderByCart(cartItems, cartCost));
    dispatch(cartChectOut());
    dispatch(setCartMassage(0));
    let orders = getState().orderStore.orders;
    let order = orders[orders.length-1];
    order.index = orders.length-1
    dispatch(setCurrentOrder(order));
    dispatch(push("orders/new"));
  }
}

export function plusQuantityAndUpdateCartCost(index){
  return (dispatch, getState) => {
    dispatch(plusQuantity(index));
    let cartItems = getState().CartReducer.cartItems;
    dispatch(updateCartCost(cartItems));
  }
}
export function minusQuantityAndUpdateCartCost(index){
  return (dispatch, getState) => {
    dispatch(minusQuantity(index));
    let cartItems = getState().CartReducer.cartItems;
    dispatch(updateCartCost(cartItems));
  }
}
export function changeQuantityAndUpdateCartCost(index,quantity){
  return (dispatch, getState) => {
    dispatch(changeQuantity(index, quantity));
    let cartItems = getState().CartReducer.cartItems;
    dispatch(updateCartCost(cartItems));
  }
}

export function removeCartItemAndSendCartMassageAndUpdateCartCost(index){
  return  (dispatch,getState) => {
    dispatch(removeCartItem(index));
    let cartItems = getState().CartReducer.cartItems;
    dispatch(setCartMassage(cartItems.length));
    dispatch(updateCartCost(cartItems));
  }
}
export function changeCartItemSelectedAndUpdateCartStatusAndUpdateCartCost(index){
  return  (dispatch,getState) => {
    dispatch(changeCartItemSelected(index));
    let cartItems = getState().CartReducer.cartItems;
    dispatch(updateCartStatus(cartItems));
    dispatch(updateCartCost(cartItems));
  }
}

export function changeAllCartItemSelectedAndSetCartStatusAndUpdateCartCost(checked){
  return  (dispatch,getState) => {
    dispatch(changeAllCartItemSelected(!checked));
    if (checked==true) {
        dispatch(setCartStatus(CheckCartStatus.ALL_UNSELECT));
    }
    if (checked==false) {
        dispatch(setCartStatus(CheckCartStatus.SELECT_ALL));
    }
    let cartItems = getState().CartReducer.cartItems;
    dispatch(updateCartCost(cartItems));

  }
}
