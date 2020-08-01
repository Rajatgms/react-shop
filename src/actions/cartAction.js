import placeOrder from '../API/placeOrder';
import { saveCart, updateCart } from '../slice/cartSlice';
import { startLoader } from '../slice/loaderSlice';
import { success, error } from '../slice/notifySlice';

function nestedCopy (array) {
  return JSON.parse(JSON.stringify(array));
}

export const addItem = (item) => {
  return (dispatch, getStore) => {
    const { cart } = getStore();
    const cartNestedCopy = nestedCopy(cart);

    const itemExist = cartNestedCopy.find(cartItem => cartItem.name === item.name);
    if (itemExist) {
      itemExist.quantity++;
      dispatch(updateCart([...cartNestedCopy]));
    } else {
      dispatch(updateCart([...cartNestedCopy, { ...item, quantity: 1 }]));
    }
  };
};

export const removeItem = (item) => {
  return (dispatch, getStore) => {
    const { cart } = getStore();
    const cartNestedCopy = nestedCopy(cart);

    const itemExist = cartNestedCopy.find(cartItem => cartItem.name === item.name);
    if (itemExist && itemExist.quantity > 1) {
      itemExist.quantity--;
      dispatch(updateCart([...cartNestedCopy]));
    } else {
      dispatch(updateCart(cartNestedCopy.filter(cartItem => cartItem.name !== item.name)));
    }
  };
};

export const handleCartPaymentAsyncAction = () => {
  return dispatch => {
    dispatch(startLoader(true));
    placeOrder(false)
      .then(result => {
        dispatch(saveCart([]));
        dispatch(success(result.message));
      })
      .catch(e => {
        dispatch(error(e.message));
      })
      .finally(() => dispatch(startLoader(false)));
  };
};
