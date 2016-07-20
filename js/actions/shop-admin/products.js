import {fetchProducts, removeRemoteProduct, getRemoteProduct} from "../../api/products_for_shopadmin";
import { push } from 'react-router-redux';
export const SHOW_PRODUCTS = "SHOW_PRODUCTS";
export const SHOW_PRODUCT = "SHOW_PRODUCT";
export const GET_PAGE = "GET_PAGE";
export const NEW_PRODUCT_STEP = "NEW_PRODUCT_STEP";
export const UPDATE_PRODUCT_IMAGES = "UPDATE_PRODUCT_IMAGES";
export const SET_COVER = "SET_COVER";
export const REMOVE_PRODUCT_IMAGE = "REMOVE_PRODUCT_IMAGE";

export function showProducts(products) {
  return {type: SHOW_PRODUCTS, products}
}
export function updateProductImages(images){
  return {type: UPDATE_PRODUCT_IMAGES, images}
}

export function updateProductImagesByNewImage(image){
  return function(dispatch, getState){
    let images = getState().ProductReducer.dealingProduct.images
    images.push(image);
    dispatch(updateProductImages(images));
  }
}

export function setCover(index){
  return {type: SET_COVER, index}
}

export function removeProductImage(index){
  return {type: REMOVE_PRODUCT_IMAGE, index}
}


export function getPage(page){
  return {type: GET_PAGE, page}
}

export function getProducts(q){

  return function (dispatch) {
    dispatch(getPage(q));
    return fetchProducts(q).then(
      products =>{
        dispatch(showProducts(products));
        dispatch(getRemoteProductAndShow(0));//激活第一个product，并没有理解为什么会有bug,但是这行代码能够解决问题
      },
      error => dispatch(showProducts([]))
    );
  };
}

export function updateProductsByRemoteDelete(index){
  return function (dispatch, getState) {
    let productId = getState().ProductReducer.products[index].id;
    let page = getState().ProductReducer.page;
    return removeRemoteProduct(productId).then(
      () => dispatch(getProducts(page)),
      error => dispatch(showProducts(page))
    );
  };
}

function showProduct(product){
  return {type: SHOW_PRODUCT, product}
}

export function newProductStep(product){
  return {type: NEW_PRODUCT_STEP, product}
}

export function updateDealingProduct(product){
  return function (dispatch, getState) {
    dispatch(newProductStep(product));
    dispatch(push("products/new/step2"));
  }
}

export function getRemoteProductAndShow(index){
  return function (dispatch, getState) {
    let productId = getState().ProductReducer.products[index].id;
    return getRemoteProduct(productId).then(
      (product) => {
        dispatch(showProduct(product));
        $("#productTitle").html(getState().ProductReducer.dealingProduct.name);
        $("#productPath").attr("src", getState().ProductReducer.dealingProduct.url.url);
      },
      error => dispatch(showProduct(null))
    );
  };
}

export function getRemoteProductAndEdit(index){
  return function (dispatch, getState) {
    let productId = getState().ProductReducer.products[index].id;
    return getRemoteProduct(productId).then(
      (product) => {
        dispatch(showProduct(product));
        $("#productTitle").html(getState().ProductReducer.dealingProduct.name);
        $("#productPath").attr("src", getState().ProductReducer.dealingProduct.url.url);
        dispatch(push("products/edit"));
      },
      error => dispatch(showProduct(null))
    );
  };
}
