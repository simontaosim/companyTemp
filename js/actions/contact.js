export const USE_CONTACT_IN_ORDER = "USE_CONTACT_IN_CURRENT_ORDER";
export const USE_CONTACT_IN_CURRENT_ORDER = "USE_CONTACT_IN_CURRENT_ORDER";

export function useContactInOrder(index, contact){
  //修改订单地址
  //index是订单
  return {type: USE_CONTACT_IN_ORDER, contact, index}

}

export function useContactInCurrentOrder(contact){
  return {type: USE_CONTACT_IN_ORDER, contact}
}
