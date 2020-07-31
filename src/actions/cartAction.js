import placeOrder from '../API/placeOrder';
import { startLoaderAction } from './loaderAction';
import { notifyErrorAction, notifySuccessAction } from './notifyAction';

export const UPDATE_CART = 'UPDATE_CART';
export const SAVE_CART = 'SAVE_CART';
export const updateCartAction = payload => ({type: UPDATE_CART, payload});
export const saveCartAction = payload => ({type: SAVE_CART, payload});

export const addItem = (item, cart) => {
  const itemExist = cart.find(cartItem => cartItem.name === item.name);
  if (itemExist) {
    itemExist.quantity++;
    return updateCartAction([...cart]);
  } else {
    return updateCartAction([...cart, { ...item, quantity: 1 }]);
  }
};

export const removeItem = (item, cart) => {
  const itemExist = cart.find(cartItem => cartItem.name === item.name);
  if (itemExist && itemExist.quantity > 1) {
    itemExist.quantity--;
    return updateCartAction([...cart]);
  } else {
    return updateCartAction(cart.filter(cartItem => cartItem.name !== item.name));
  }
};

// Not an action creator as it does not return a Redux action,
// but an Asynchronous helper method that dispatch redux action.
export const handleCartPaymentAsync = (dispatch) => {
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

