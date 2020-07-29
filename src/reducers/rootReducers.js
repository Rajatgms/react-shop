import { combineReducers } from 'redux';
import cartReducer from './cartReducer';
import loaderReducer from './loaderReducer';
import itemsReducer from './itemsReducer';
import notifyReducer from './notifyReducer';

const rootReducer = combineReducers(
  {
    cart: cartReducer,
    items: itemsReducer,
    loader: loaderReducer,
    notify: notifyReducer,
  },
);
export default rootReducer;
