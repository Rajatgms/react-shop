import fetchMarketItems from '../API/fetchMarketItems';
import { startLoaderAction } from './loaderAction';
import { createAction } from '@reduxjs/toolkit';

export const SAVE_ITEMS = 'SAVE_ITEMS';

export const saveItemAction = createAction(SAVE_ITEMS);

export const fetchItemAsync = () => {
  return dispatch => {
    dispatch(startLoaderAction(true));
    fetchMarketItems()
      .then(items => dispatch(saveItemAction(items)))
      .finally(() => dispatch(startLoaderAction(false)));
  };
}
