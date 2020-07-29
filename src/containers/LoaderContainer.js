import { connect } from 'react-redux';
import Loader from '../components/Loader';

const mapStateToProps = (state) => {
  return {
    loader: state.loader,
  };
};

const LoaderContainer = connect(mapStateToProps)(Loader);

export default LoaderContainer;
