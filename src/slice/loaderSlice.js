import { createSlice } from '@reduxjs/toolkit';

const loaderSlice = createSlice({
  name: 'loader',
  initialState: false,
  reducers: {
    startLoader: (state, action) => action.payload,
  },
});

const {actions, reducer} = loaderSlice;

export const {startLoader} = actions;

export default reducer;

