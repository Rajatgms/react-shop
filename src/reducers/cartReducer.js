import { saveCartAction, updateCartAction } from '../actions/cartAction';
import { createReducer } from '@reduxjs/toolkit';

const localCart = localStorage.getItem('cart');
const initialCartState = localCart ? JSON.parse(localCart) : [];

const cartReducer = createReducer(initialCartState, {
  [updateCartAction]: (state, action) => {
    localStorage.setItem('cart', JSON.stringify(action.payload));
    return [...action.payload];
  },
  [saveCartAction]: (state, action) => {
    localStorage.setItem('cart', JSON.stringify(action.payload));
    return [...action.payload];
  },
});

export default cartReducer;
