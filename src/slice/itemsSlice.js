import { createSlice } from '@reduxjs/toolkit';

const itemsSlice = createSlice({
  name: 'items',
  initialState: [],
  reducers: {
    saveItems: (state, action) => [...state, ...action.payload],
  },
});
export default itemsSlice;
