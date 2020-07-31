import placeOrder from '../API/placeOrder';
import { startLoaderAction } from './loaderAction';
import { notifyErrorAction, notifySuccessAction } from './notifyAction';

export const UPDATE_CART = 'UPDATE_CART';
export const SAVE_CART = 'SAVE_CART';
export const updateCartAction = payload => ({type: UPDATE_CART, payload});
export const saveCartAction = payload => ({type: SAVE_CART, payload});

export const addItem = (item) => {
  return (dispatch, getStore) => {
    const {cart} = getStore();
    const itemExist = cart.find(cartItem => cartItem.name === item.name);
    if (itemExist) {
      itemExist.quantity++;
      dispatch(updateCartAction([...cart]));
    } else {
      dispatch(updateCartAction([...cart, { ...item, quantity: 1 }]));
    }
  }
};

export const removeItem = (item) => {
  return (dispatch, getStore) => {
    const {cart} = getStore();
    const itemExist = cart.find(cartItem => cartItem.name === item.name);
    if (itemExist && itemExist.quantity > 1) {
      itemExist.quantity--;
      dispatch(updateCartAction([...cart]));
    } else {
      dispatch(updateCartAction(cart.filter(cartItem => cartItem.name !== item.name)));
    }
  }
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
  }
};
