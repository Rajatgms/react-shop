import { createSlice } from '@reduxjs/toolkit';

const localCart = localStorage.getItem('cart');
const initialCartState = localCart ? JSON.parse(localCart) : [];

const cartSlice = createSlice({
  name: 'cart',
  initialState: initialCartState,
  reducers: {
    addCart: (state, action) => {
      // state is a draft state of cart
      const item = action.payload;

      const itemExist = state.find(cartItem => cartItem.name === item.name);
      if (itemExist) {
        itemExist.quantity++;
      } else {
        state = [...state, { ...item, quantity: 1 }];
      }

      localStorage.setItem('cart', JSON.stringify(state));
      return state;
    },
    removeCart: (state, action) => {
      // state is a draft state of cart
      const item = action.payload;

      const itemExist = state.find(cartItem => cartItem.name === item.name);
      if (itemExist && itemExist.quantity > 1) {
        itemExist.quantity--;
      } else {
        state = state.filter(cartItem => cartItem.name !== item.name);
      }
      localStorage.setItem('cart', JSON.stringify(state));
      return state;
    },
    saveCart: (state, action) => {
      localStorage.setItem('cart', JSON.stringify(action.payload));
      return [...action.payload];
    },
  },
});

const {actions, reducer} = cartSlice;

export const {addCart, removeCart, saveCart} = actions;

export default reducer;
