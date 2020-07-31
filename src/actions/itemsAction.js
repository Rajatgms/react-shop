import fetchMarketItems from '../API/fetchMarketItems';
import { startLoaderAction } from './loaderAction';

export const SAVE_ITEMS = 'SAVE_ITEMS';

export const saveItemAction = payload => ({ type: SAVE_ITEMS, payload });

// Not an action creator as it does not return a Redux action,
// but an Asynchronous helper method that dispatch redux action.
export const fetchItemAsync = dispatch => {
  dispatch(startLoaderAction(true));
  fetchMarketItems()
    .then(items => dispatch(saveItemAction(items)))
    .finally(() => dispatch(startLoaderAction(false)));
};
