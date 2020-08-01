import { startLoader } from '../slice/loaderSlice';
import { fetchAllItems, saveItems } from '../slice/itemsSlice';
import { unwrapResult } from '@reduxjs/toolkit';

export const fetchItemAsync = () => {
  return dispatch => {
    dispatch(startLoader(true));
    dispatch(fetchAllItems())
      // Always return resolved promise with error or payload hence used unwrapResult
      // extract the payload or error from the action and return or throw the result
      .then(unwrapResult)
      .then(items => dispatch(saveItems(items)))
      .finally(() => dispatch(startLoader(false)));
  };
};
