import { startLoaderAction } from '../actions/loaderAction';
import { createReducer } from '@reduxjs/toolkit';

const loaderReducer = createReducer(false, {
  [startLoaderAction]: (state, action) => action.payload,
});

export default loaderReducer;
