import { combineReducers } from 'redux';

import { GENERATE_NEW_ORDER_BY_ONE_PRODUCT } from "../actions/home";
import { GENERATE_NEW_ORDER_BY_CART } from "../actions/cart";
import { SET_CURRENT_ORDER_DEAL } from "../actions/newOrder";
import { ADD_NEW_CONTACT } from "../actions/newContact";
import {USE_CONTACT_IN_CURRENT_ORDER} from "../actions/contactManager";
import {UPDATE_ORDERS_BY_CONTACT} from "../actions/contactManager";



let contactInit = {
  name: "",
  mobile: "",
  address: ""
}

function contacts(state=[], action){
  switch (action.type) {
    case ADD_NEW_CONTACT:
      return [...state, action.contact];
      break;
    // case REMOVE_CONTACT:
    //   return [
    //     ...state.slice(0, action.index-1),
    //     ...state.slice(action.index+1, -1)
    //   ];
    //  case SET_DEFAULT_CONTACT:
    //     return [
    //       ...state.slice(0, action.index),
    //       Object.assign({}, state[action.index], {
    //         isDefault: true
    //       }),
    //       ...state.slice(action.index+1)
    //     ];
    //   break;
    default:
      return state;

  }
}

// function productsReadyToBuy(state=[], action){
//   switch (action.type) {
//     case GENERATE_NEW_ORDER:
//       return [...state, action.contact];
//       break;
//     default:
//       return state;
//
//   }
// }
//
// function currentOrderToDeal(state={}, action){
//   switch (action.type) {
//     case GET_NEW_ORDER:
//       return action.order;
//       break;
//     default:
//       return state;
//
//   }
// }
//
// function productsCount(state=0, action){
//   switch (action.type) {
//     case UPDATE_PRODUCT_COUNT:
//       return action.count
//       break;
//     default:
//       return state;
//   }
// }
//
// function status(state="UNPAID", action){
//   switch (action.type) {
//     case PAY_THE_ORDER:
//       return "PAID";
//       break;
//     case CANCEL_THE_ORDER
//       return "CANCELED"
//     default:
//       return state;
//   }
// }
//
// function payment(state="wechat", action){
//   switch (action.type) {
//     case USE_WECHAT:
//       return "wechat";
//       break;
//     case USE_ALIPAY:
//       return "alipay";
//       break;
//     default:
//       return state;
//
//   }
// }
//
// function invoice(state=null, action){
//   switch (action.type) {
//     case USE_INVOICE:
//       return {
//         type: action.invoiceType,
//         title: action.title
//       }
//       break;
//     case NO_INVOICE:
//       return "";
//     default:
//       return state;
//
//   }
// }
let orderInit = {
  index: -1,
  contactInUse: null,
  cost: "",
  products: [],
  payment: "",
  note: "",
  cancelNote: "",
  status: "UNPAID"
}



function currentOrder(state=orderInit, action){
  switch (action.type) {
    case SET_CURRENT_ORDER_DEAL:
      return action.order;
      break;
    case USE_CONTACT_IN_CURRENT_ORDER:
      orderInit = state;
      orderInit.contactInUse = action.contact;
      return orderInit;
    default:
      return state;

  }
}



function orders(state=[], action){
  switch (action.type) {
    case GENERATE_NEW_ORDER_BY_CART:
      let new_order_by_cart = orderInit;

      new_order_by_cart.cost = action.cartCost;
      new_order_by_cart.products = action.cartItems;
      new_order_by_cart.payment = "wechat";
      new_order_by_cart.invoice = null;
      new_order_by_cart.status = "UNPAID"
      return [...state, new_order_by_cart];
      break;
    case GENERATE_NEW_ORDER_BY_ONE_PRODUCT:
      let new_order_by_one_product = orderInit;
      new_order_by_one_product.cost = action.product.price;
      let new_order_product = new Object();
      new_order_product.price = action.product.price;
      new_order_product.quantity = 1
      new_order_product.title = action.product.title;
      new_order_product.cost = action.product.price;
      new_order_product.imageUrl = action.product.imageUrl;
      new_order_by_one_product.cost = action.product.price;
      new_order_by_one_product.products = [new_order_product];
      new_order_by_one_product.payment = "wechat";
      new_order_by_one_product.invoice = null;
      new_order_by_one_product.status = "UNPAID"
      new_order_by_one_product.index = -1;
      return [...state, new_order_by_one_product];

    case UPDATE_ORDERS_BY_CONTACT:
      return [
        ...state.slice(0, action.index),
        Object.assign({}, state[action.currentOrder.index], {
          contactInUse: action.currentOrder.contactInUse
        }),
        ...state.slice(action.index+1)
      ];
      break;
    // case ADD_PAYMENT:
    //   return [
    //     ...state.slice(0, action.index),
    //     Object.assign({}, state[action.index], {
    //       payment: action.payment
    //     }),
    //     ...state.slice(action.index+1)
    //   ];

    default:
      return state;

  }
}

const orderStore = combineReducers({
  contacts,
  orders,
  currentOrder
});

export default orderStore;
