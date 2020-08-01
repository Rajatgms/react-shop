import { createSlice } from '@reduxjs/toolkit';

const itemsSlice = createSlice({
  name: 'items',
  initialState: [],
  reducers: {
    saveItems: (state, action) => [...state, ...action.payload],
  },
});

const {actions, reducer} = itemsSlice;

export const {saveItems} = actions;

export default reducer;

