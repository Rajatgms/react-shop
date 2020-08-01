import placeOrder from '../API/placeOrder';
import cartSlice from '../slice/cartSlice';
import loaderSlice from '../slice/loaderSlice';
import notifySlice from '../slice/notifySlice';

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
      dispatch(cartSlice.actions.updateCart([...cartNestedCopy]));
    } else {
      dispatch(cartSlice.actions.updateCart([...cartNestedCopy, { ...item, quantity: 1 }]));
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
      dispatch(cartSlice.actions.updateCart([...cartNestedCopy]));
    } else {
      dispatch(cartSlice.actions.updateCart(cartNestedCopy.filter(cartItem => cartItem.name !== item.name)));
    }
  };
};

export const handleCartPaymentAsyncAction = () => {
  return dispatch => {
    dispatch(loaderSlice.actions.startLoader(true));
    placeOrder(false)
      .then(result => {
        dispatch(cartSlice.actions.saveCart([]));
        dispatch(notifySlice.actions.success(result.message));
      })
      .catch(error => {
        dispatch(notifySlice.actions.error(error.message));
      })
      .finally(() => dispatch(loaderSlice.actions.startLoader(false)));
  };
};
