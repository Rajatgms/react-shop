import placeOrder from '../API/placeOrder';
import { startLoaderAction } from './loaderAction';
import { notifyErrorAction, notifySuccessAction } from './notifyAction';
import { createAction } from '@reduxjs/toolkit';

export const UPDATE_CART = 'UPDATE_CART';
export const SAVE_CART = 'SAVE_CART';
export const updateCartAction = createAction(UPDATE_CART);
export const saveCartAction = createAction(SAVE_CART);

function nestedCopy(array) {
  return JSON.parse(JSON.stringify(array));
}

export const addItem = (item) => {
  return (dispatch, getStore) => {
    const {cart} = getStore();
    const cartNestedCopy = nestedCopy(cart);

    const itemExist = cartNestedCopy.find(cartItem => cartItem.name === item.name);
    if (itemExist) {
      itemExist.quantity++;
      dispatch(updateCartAction([...cartNestedCopy]));
    } else {
      dispatch(updateCartAction([...cartNestedCopy, { ...item, quantity: 1 }]));
    }
  }
};

export const removeItem = (item) => {
  return (dispatch, getStore) => {
    const { cart } = getStore();
    const cartNestedCopy = nestedCopy(cart);

    const itemExist = cartNestedCopy.find(cartItem => cartItem.name === item.name);
    if (itemExist && itemExist.quantity > 1) {
      itemExist.quantity--;
      dispatch(updateCartAction([...cartNestedCopy]));
    } else {
      dispatch(updateCartAction(cartNestedCopy.filter(cartItem => cartItem.name !== item.name)));
    }
  };
};

export const handleCartPaymentAsyncAction = () => {
  return dispatch => {
    dispatch(startLoaderAction(true));
    placeOrder(false)
      .then(result => {
        dispatch(saveCartAction([]));
        dispatch(notifySuccessAction(result.message));
      })
      .catch(error => {
        dispatch(notifyErrorAction(error.message));
      })
      .finally(() => dispatch(startLoaderAction(false)));
  };
};
