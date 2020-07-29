import { SAVE_ITEMS } from '../actions/itemsAction';

const itemsReducer = (items = [], action) => {
  if (action.type === SAVE_ITEMS) {
    return [...action.payload];
  }
  return items;
};

export default itemsReducer;
