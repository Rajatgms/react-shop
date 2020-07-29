import { connect } from 'react-redux';
import Notify from '../components/Notify';

const mapStateToProps = (state) => {
  return {
    notify: state.notify,
  };
};

const NotifyContainer = connect(mapStateToProps)(Notify);

export default NotifyContainer;
