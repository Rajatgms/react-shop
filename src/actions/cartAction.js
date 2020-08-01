import { placeOrderThunk, saveCart } from '../slice/cartSlice';
import { startLoader } from '../slice/loaderSlice';
import { error, success } from '../slice/notifySlice';
import { unwrapResult } from '@reduxjs/toolkit';

export const handleCartPaymentAsyncAction = () => {
  return dispatch => {
    dispatch(startLoader(true));
    dispatch(placeOrderThunk())
      // Always return resolved promise with error or payload hence used unwrapResult
      // extract the payload or error from the action and return or throw the result
      .then(unwrapResult)
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
