import {fetchImages, removeRemoteImage, getRemoteImage} from "../../api/images_for_shopadmin";
import { push } from 'react-router-redux';
export const SHOW_IMAGES = "SHOW_IMAGES";
export const SHOW_IMAGE = "SHOW_IMAGE";
export const GET_PAGE = "GET_PAGE";

export function showImages(images) {
  return {type: SHOW_IMAGES, images}
}


export function getPage(page){
  return {type: GET_PAGE, page}
}

export function getImages(q){

  return function (dispatch) {
    dispatch(getPage(q));
    return fetchImages(q).then(
      images =>{
        dispatch(showImages(images));
        dispatch(getRemoteImageAndShow(0));//激活第一个image，并没有理解为什么会有bug,但是这行代码能够解决问题
      },
      error => dispatch(showImages([]))
    );
  };
}

export function updateImagesByRemoteDelete(index){
  return function (dispatch, getState) {
    let imageId = getState().ImageReducer.images[index].id;
    let page = getState().ImageReducer.page;
    return removeRemoteImage(imageId).then(
      () => dispatch(getImages(page)),
      error => dispatch(showImages(page))
    );
  };
}

function showImage(image){
  return {type: SHOW_IMAGE, image}
}

export function getRemoteImageAndShow(index){
  return function (dispatch, getState) {
    let imageId = getState().ImageReducer.images[index].id;
    return getRemoteImage(imageId).then(
      (image) => {
        dispatch(showImage(image));
        $("#imageTitle").html(getState().ImageReducer.dealingImage.name);
        $("#imagePath").attr("src", getState().ImageReducer.dealingImage.url.url);
      },
      error => dispatch(showImage(null))
    );
  };
}

export function getRemoteImageAndEdit(index){
  return function (dispatch, getState) {
    let imageId = getState().ImageReducer.images[index].id;
    return getRemoteImage(imageId).then(
      (image) => {
        dispatch(showImage(image));
        $("#imageTitle").html(getState().ImageReducer.dealingImage.name);
        $("#imagePath").attr("src", getState().ImageReducer.dealingImage.url.url);
        dispatch(push("images/edit"));
      },
      error => dispatch(showImage(null))
    );
  };
}
