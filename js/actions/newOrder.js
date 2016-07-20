export const SET_CURRENT_ORDER_DEAL = "SET_CURRENT_ORDER_DEAL";


export function setCurrentOrder(order){
  return { type: SET_CURRENT_ORDER_DEAL, order}
}
