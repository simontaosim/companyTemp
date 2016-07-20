import { combineReducers } from 'redux';

import {
  SHOW_PRODUCTS, GET_PAGE, SHOW_PRODUCT, NEW_PRODUCT_STEP, UPDATE_PRODUCT_IMAGES, SET_COVER, REMOVE_PRODUCT_IMAGE
} from "../../actions/shop-admin/products.js";

function products(state=[], action) {
  switch (action.type) {
    case SHOW_PRODUCTS:
      return action.products;
      break;
    default:
    return state;

  }

}
function page(state=1, action){
  switch (action.type) {
    case GET_PAGE:
      return action.page;
      break;
    default:
    return state;

  }
}



var initProduct = {
  title: '',
  price: 0.00,
  storeNumber: '',
  advanceSaying: '',
  briefDecription: '',
  images: [],
  cover: 0
}

function dealingProduct(state=initProduct, action){
  switch (action.type) {
    case SHOW_PRODUCT:
      return action.product;
      break;

    case NEW_PRODUCT_STEP:
      return action.product;
      break;
    case SET_COVER:
      return Object.assign({}, state, {
        cover: action.index
      })
      break;
    case UPDATE_PRODUCT_IMAGES:
      return Object.assign({}, state, {
        images: action.images
      })
      break;
    case REMOVE_PRODUCT_IMAGE:
      let images = new Array();
      for (var i = 0; i < state.images.length; i++) {

        if (i == Number(action.index)) {
          continue;
        }else{
          images.push(state.images[i]);
        }

      }
      return Object.assign({}, state, {
        images: images
      })
      break;

    default:
    return state;

  }
}

const ProductReducer = combineReducers({
  products,page, dealingProduct
});

export default ProductReducer;
