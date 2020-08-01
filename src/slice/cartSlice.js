import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import placeOrder from '../API/placeOrder';

const localCart = localStorage.getItem('cart');
const initialCartState = localCart ? JSON.parse(localCart) : [];

export const placeOrderThunk = createAsyncThunk(
  'cart/placeOrderThunk', // action type
  placeOrder,
);

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
      return state;
    },
    saveCart: (state, action) => {
      return [...action.payload];
    },
  },
  extraReducers: builder => {
    builder
      .addCase(placeOrderThunk.fulfilled, () => [])
      .addMatcher(
        action => action.type.startsWith('cart'),
        state => localStorage.setItem('cart', JSON.stringify(state)),
      );
  },
});

const { actions, reducer } = cartSlice;

export const { addCart, removeCart, saveCart } = actions;

export default reducer;
