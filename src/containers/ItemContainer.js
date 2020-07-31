import Item from '../components/Item';
import { connect } from 'react-redux';
import { addItem, removeItem } from '../actions/cartAction';

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addItem: (item, cart) => dispatch(addItem(item, cart)),
    removeItem: (item, cart) => dispatch(removeItem(item, cart)),
  };
};
const ItemContainer = connect(mapStateToProps, mapDispatchToProps)(Item);

export default ItemContainer;
