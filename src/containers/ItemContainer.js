import Item from '../components/Item';
import { connect } from 'react-redux';
import { addItem, removeItem } from '../actions/cartAction';

const mapDispatchToProps = (dispatch) => {
  return {
    addItem: item => dispatch(addItem(item)),
    removeItem: item => dispatch(removeItem(item)),
  };
};
const ItemContainer = connect(null, mapDispatchToProps)(Item);

export default ItemContainer;
