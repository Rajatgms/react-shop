import { combineReducers } from '@reduxjs/toolkit';
import loaderReducer from './slice/loaderSlice';
import itemsReducer from './slice/itemsSlice';
import notifyReducer from './slice/notifySlice';
import cartReducer from './slice/cartSlice';

const rootReducer = combineReducers(
  {
    cart: cartReducer,
    items: itemsReducer,
    loader: loaderReducer,
    notify: notifyReducer,
  },
);
export default rootReducer;
