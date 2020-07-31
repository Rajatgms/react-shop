import { NOTIFY_ERROR, NOTIFY_RESET, NOTIFY_SUCCESS } from '../actions/notifyAction';

const initialAlert = {
  variant: '',
  message: '',
};

const notifyReducer = (alert = initialAlert, action) => {
  if (action.type === NOTIFY_SUCCESS) {
    return { variant: 'success', message: action.payload };
  } else if (action.type === NOTIFY_ERROR) {
    return { variant: 'danger', message: action.payload };
  } else if(action.type === NOTIFY_RESET){
    return initialAlert;
  }
  return alert;
};

export default notifyReducer;
