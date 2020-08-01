import fetchMarketItems from '../API/fetchMarketItems';
import { startLoader } from '../slice/loaderSlice';
import { saveItems } from '../slice/itemsSlice';

export const fetchItemAsync = () => {
  return dispatch => {
    dispatch(startLoader(true));
    fetchMarketItems()
      .then(items => dispatch(saveItems(items)))
      .finally(() => dispatch(startLoader(false)));
  };
};
