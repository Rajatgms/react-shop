import { combineReducers } from '@reduxjs/toolkit';
import loaderSlice from './loaderSlice';
import itemsSlice from './itemsSlice';
import notifySlice from './notifySlice';
import cartSlice from './cartSlice';

const rootReducer = combineReducers(
  {
    cart: cartSlice.reducer,
    items: itemsSlice.reducer,
    loader: loaderSlice.reducer,
    notify: notifySlice.reducer,
  },
);
export default rootReducer;
