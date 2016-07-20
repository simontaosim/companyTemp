import { combineReducers } from 'redux';

import {
  SHOW_IMAGES, GET_PAGE, SHOW_IMAGE
} from "../../actions/shop-admin/images.js";

function images(state=[], action) {
  switch (action.type) {
    case SHOW_IMAGES:
      return action.images;
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

var initImage = {
  name: "",
  url: ""
}

function dealingImage(state=initImage, action){
  switch (action.type) {
    case SHOW_IMAGE:
      
      return action.image;
      break;
    default:
    return state;

  }
}

const ImageReducer = combineReducers({
  images,page, dealingImage
});

export default ImageReducer;
