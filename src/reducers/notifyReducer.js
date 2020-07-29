import { NOTIFY_SUCCESS, NOTIFY_ERROR } from '../actions/notifyAction';

const initialAlert = {
  variant: '',
  message: '',
};

const notifyReducer = (alert = initialAlert, action) => {
  if (action.type === NOTIFY_SUCCESS) {
    return { ...alert, variant: 'success', message: action.payload};
  } else if (action.type === NOTIFY_ERROR) {
    return { ...alert, variant: 'danger', message: action.payload};
  }
  return alert;
};

export default notifyReducer;
