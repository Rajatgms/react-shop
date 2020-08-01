import { createSlice } from '@reduxjs/toolkit';

const loaderSlice = createSlice({
  name: 'loader',
  initialState: false,
  reducers: {
    startLoader: (state, action) => action.payload,
  },
  extraReducers: builder => {
    builder
      .addMatcher(
        action => action.type.endsWith('/pending') && 'requestId' in action.meta,
        () => true,
      )
      .addMatcher(
        action => (
          action.type.endsWith('/fulfilled') ||
          action.type.endsWith('/rejected')) &&
          'requestId' in action.meta,
        () => false,
      )
    ;
  },
});

const { actions, reducer } = loaderSlice;

export const { startLoader } = actions;

export default reducer;

