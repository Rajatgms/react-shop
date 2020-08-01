import { createAction } from '@reduxjs/toolkit';

export const NOTIFY_SUCCESS = 'NOTIFY_SUCCESS';
export const NOTIFY_ERROR = 'NOTIFY_ERROR';
export const NOTIFY_RESET = 'NOTIFY_RESET';

export const notifySuccessAction = createAction(NOTIFY_SUCCESS);
export const notifyErrorAction = createAction(NOTIFY_ERROR);
export const notifyResetAction = createAction(NOTIFY_RESET);
