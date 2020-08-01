import { createSlice } from '@reduxjs/toolkit';

const initialAlert = {
  variant: '',
  message: '',
};

const notifySlice = createSlice({
  name: 'notify',
  initialState: initialAlert,
  reducers: {
    success: (state, action) => (
      { variant: 'success', message: action.payload }
    ),
    error: (state, action) => (
      { variant: 'danger', message: action.payload }
    ),
    reset: () => initialAlert,
  },
});

const {actions, reducer} = notifySlice;

export const {success, error, reset} = actions;

export default reducer;
