import { push } from 'react-router-redux';

export const USE_CONTACT_IN_CURRENT_ORDER = "USE_CONTACT_IN_CURRENT_ORDER";
export const UPDATE_ORDERS_BY_CONTACT = "UPDATE_ORDERS_BY_CONTACT";

function useContactInCurrentOrder(contact){
  return {type: USE_CONTACT_IN_CURRENT_ORDER, contact}
}

function updateOrdersByContact(currentOrder){
  return {type: UPDATE_ORDERS_BY_CONTACT, currentOrder}
}
export function useContactInCurrentOrderAndPush(contact){
  return (dispatch, getState) => {
    dispatch(useContactInCurrentOrder(contact));
    dispatch(push("orders/new"));
  }
}
