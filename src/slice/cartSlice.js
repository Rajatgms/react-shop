import { createSlice } from '@reduxjs/toolkit';

const localCart = localStorage.getItem('cart');
const initialCartState = localCart ? JSON.parse(localCart) : [1, 2];

const cartSlice = createSlice({
  name: 'cart',
  initialState: initialCartState,
  reducers: {
    updateCart: (state, action) => {
      localStorage.setItem('cart', JSON.stringify(action.payload));
      return [...action.payload];
    },
    saveCart: (state, action) => {
      localStorage.setItem('cart', JSON.stringify(action.payload));
      return [...action.payload];
    },
  },
});

export default cartSlice;
