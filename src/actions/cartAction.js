import placeOrder from '../API/placeOrder';
import { saveCart } from '../slice/cartSlice';
import { startLoader } from '../slice/loaderSlice';
import { error, success } from '../slice/notifySlice';

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
