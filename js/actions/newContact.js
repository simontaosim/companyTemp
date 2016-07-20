import { goBack } from 'react-router-redux';

export const ADD_NEW_CONTACT = "ADD_NEW_CONTACT";

export function addNewContact(contact){
  return {type: ADD_NEW_CONTACT, contact}
}

export function addNewContactAndgoBack(contact){
  return (dispatch, getState) => {
    dispatch(addNewContact(contact));
    dispatch(goBack());
  }
}
