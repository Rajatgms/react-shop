import { saveItemAction } from '../actions/itemsAction';
import { createReducer } from '@reduxjs/toolkit';

const itemsReducer = createReducer([], {
  [saveItemAction]: (state, action) => [...state, ...action.payload],
});
export default itemsReducer;
