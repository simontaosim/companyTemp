import {fetchProducts} from "../api/products_for_mshop";

import { updateCartStatus, addCartItem, updateCartCost } from "./cart";
import {setCartMassage} from "./app";
import {setCurrentOrder} from "./newOrder";

import { push } from 'react-router-redux';
/*
首页所有的action类型
*/

export const GET_PRODUCTS = "GET_PRODUCTS";
export const ADD_PRODUCT_TO_CART = "ADD_PRODUCT_TO_CART";
export const GET_PRODUCT_BANNERS = "GET_PRODUCT_BANNERS";
export const SHOW_PRODUCTS = "SHOW_PRODUCTS";
export const SHOW_MORE_PRODUCTS = "SHOW_MORE_PRODUCTS";
export const GENERATE_NEW_ORDER_BY_ONE_PRODUCT = "GENERATE_NEW_ORDER_BY_ONE_PRODUCT";

export function getProducts(q){

  return function (dispatch) {
    return fetchProducts(q).then(
      products => dispatch(showProducts(products)),
      error => dispatch(showProducts([]))
    );
  };
}

export function getProductBanners(){
  return {type: GET_PRODUCT_BANNERS};
}

export function showProducts(products){
  return  {type: SHOW_PRODUCTS, products};
}
export function showMoreProducts(products){
  return {type: SHOW_MORE_PRODUCTS, products};
}
export function addProductToCart(index){
  return  (dispatch, getState) => {
    let product = getState().HomeReducer.products[index];
    dispatch(addCartItem(product));
    let cartItems = getState().CartReducer.cartItems;
    dispatch(updateCartStatus(cartItems));
    dispatch(updateCartCost(cartItems));
    dispatch(setCartMassage(cartItems.length));
  }
}
export function generateNewOrderByOneProduct (product){
    return {type: GENERATE_NEW_ORDER_BY_ONE_PRODUCT, product}
}



export function generateNewOrderByFastAndPushPath(productIndex){
  return (dispatch, getState) => {
    dispatch(generateNewOrderByOneProduct(getState().HomeReducer.products[productIndex]));
    let orders = getState().orderStore.orders;
    let order = orders[orders.length-1];
    order.index = orders.length-1
    dispatch(setCurrentOrder(order));
    dispatch(push("/orders/new"));
  }
}
