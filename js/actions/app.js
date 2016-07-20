export const COMPONENT_MASSAGE_SEND = "COMPONENT_MASSAGE_SEND";
export const UNCHECKED_OUT_CART_ITEM_COUNT = "UNCHECKED_OUT_CART_ITEM_COUNT";
export const SET_CURRENT_ORDER_DEAL = "SET_CURRENT_ORDER";

export function setCartMassage(number) {
  return {type: UNCHECKED_OUT_CART_ITEM_COUNT, number};
}

export function setCurrentOrder(orderIndex){
  return {type: SET_CURRENT_ORDER_DEAL, index }
}
