import fetchMarketItems from '../API/fetchMarketItems';
import { startLoaderAction } from './loaderAction';

export const SAVE_ITEMS = 'SAVE_ITEMS';

export const saveItemAction = payload => ({ type: SAVE_ITEMS, payload });

export const fetchItemAsync = () => {
  return dispatch => {
    dispatch(startLoaderAction(true));
    fetchMarketItems()
      .then(items => dispatch(saveItemAction(items)))
      .finally(() => dispatch(startLoaderAction(false)));
  };
}
