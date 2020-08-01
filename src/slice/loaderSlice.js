import { createSlice } from '@reduxjs/toolkit';

const loaderSlice = createSlice({
  name: 'loader',
  initialState: false,
  reducers: {
    startLoader: (state, action) => action.payload,
  },
});

export default loaderSlice;
