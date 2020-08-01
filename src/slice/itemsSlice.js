import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import fetchMarketItems from '../API/fetchMarketItems';

export const fetchAllItems = createAsyncThunk(
  'items/fetchAllItems',
  fetchMarketItems,
  {
    condition: (arg, api) => {
      return !api.getState().items.length > 0;
    },
  },
);
const itemsSlice = createSlice({
  name: 'items',
  initialState: [],
  reducers: {
    saveItems: (state, action) => [...state, ...action.payload],
  },
  extraReducers: {
    // if API successfully fetch all item save it to store items
    [fetchAllItems.fulfilled]: (state, action) => [...state, ...action.payload],
  },
});

const { actions, reducer } = itemsSlice;

export const { saveItems } = actions;

export default reducer;

