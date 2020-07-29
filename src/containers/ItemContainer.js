import Item from '../components/Item';
import { connect } from 'react-redux';
import { updateCartAction } from '../actions/cartAction';

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateCart: payload => dispatch(updateCartAction(payload)),
  };
};
const ItemContainer = connect(mapStateToProps, mapDispatchToProps)(Item);

export default ItemContainer;
