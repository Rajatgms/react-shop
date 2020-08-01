import fetchMarketItems from '../API/fetchMarketItems';
import itemsSlice from '../slice/itemsSlice';
import loaderSlice from '../slice/loaderSlice';

export const fetchItemAsync = () => {
  return dispatch => {
    dispatch(loaderSlice.actions.startLoader(true));
    fetchMarketItems()
      .then(items => dispatch(itemsSlice.actions.saveItems(items)))
      .finally(() => dispatch(loaderSlice.actions.startLoader(false)));
  };
};
