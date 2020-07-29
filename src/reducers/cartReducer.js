const localCart = localStorage.getItem('cart');
const initialCartState = localCart ? JSON.parse(localCart) : [];

const cartReducer = (cart = initialCartState, action) => {
  if (action.type === 'UPDATE_CART') {
    localStorage.setItem('cart', JSON.stringify(action.payload));
    return [...action.payload];
  } else if (action.type === 'SAVE_CART') {
    localStorage.setItem('cart', JSON.stringify(action.payload));
    return [...action.payload];
  }

  return cart;
};

export default cartReducer;
