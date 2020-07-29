import { connect } from 'react-redux';
import Cart from '../components/Cart';
import { saveCartAction } from '../actions/cartAction';
import { startLoaderAction } from '../actions/loaderAction';
import { notifyErrorAction, notifySuccessAction } from '../actions/notifyAction';

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    saveCart: payload => dispatch(saveCartAction(payload)),
    startLoader: payload => dispatch(startLoaderAction(payload)),
    notifySuccess: payload => dispatch(notifySuccessAction(payload)),
    notifyError: payload => dispatch(notifyErrorAction(payload)),
  };
};

const CartContainer = connect(mapStateToProps, mapDispatchToProps)(Cart);

export default CartContainer;
