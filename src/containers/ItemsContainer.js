import Items from '../components/Items';
import { connect } from 'react-redux';
import { fetchItemAsync } from '../actions/itemsAction';

const mapStateToProps = (state) => {
  return {
    items: state.items,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchItemAsync: () => dispatch(fetchItemAsync()),
  };
};
const ItemsContainer = connect(mapStateToProps, mapDispatchToProps)(Items);

export default ItemsContainer;
