import { LOADER } from '../actions/loaderAction';

const loaderReducer = (loader = false, action) => {
  if (action.type === LOADER) {
    return action.payload;
  }
  return loader;
};

export default loaderReducer;
