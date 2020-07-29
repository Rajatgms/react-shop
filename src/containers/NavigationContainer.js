import { connect } from 'react-redux';
import Navigation from '../components/Navigation';

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
  };
};

const NavigationContainer = connect(mapStateToProps)(Navigation);

export default NavigationContainer;
