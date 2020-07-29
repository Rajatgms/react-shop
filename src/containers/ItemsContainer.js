import Items from '../components/Items';
import { connect } from 'react-redux';
import { saveItemAction } from '../actions/itemsAction';
import { updateCartAction } from '../actions/cartAction';
import { startLoaderAction } from '../actions/loaderAction';

const mapStateToProps = (state) => {
  return {
    items: state.items,
    cart: state.cart,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    saveItems: payload => dispatch(saveItemAction(payload)),
    updateCart: payload => dispatch(updateCartAction(payload)),
    startLoader: payload => dispatch(startLoaderAction(payload)),
  };
};
const ItemsContainer = connect(mapStateToProps, mapDispatchToProps)(Items);

export default ItemsContainer;
