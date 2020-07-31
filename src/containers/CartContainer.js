import { connect } from 'react-redux';
import Cart from '../components/Cart';
import { handleCartPaymentAsync } from '../actions/cartAction';

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleCartPaymentAsync: () => dispatch(handleCartPaymentAsync()),
  };
};

const CartContainer = connect(mapStateToProps, mapDispatchToProps)(Cart);

export default CartContainer;