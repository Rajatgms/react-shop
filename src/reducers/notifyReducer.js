import { notifyErrorAction, notifyResetAction, notifySuccessAction } from '../actions/notifyAction';
import { createReducer } from '@reduxjs/toolkit';

const initialAlert = {
  variant: '',
  message: '',
};

const notifyReducer = createReducer(initialAlert, {
  [notifySuccessAction]: (state, action) => (
    { variant: 'success', message: action.payload }
  ),
  [notifyErrorAction]: (state, action) => (
    { variant: 'danger', message: action.payload }
  ),
  [notifyResetAction]: () => initialAlert,
});

export default notifyReducer;
