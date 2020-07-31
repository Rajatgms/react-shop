export const NOTIFY_SUCCESS = 'NOTIFY_SUCCESS';
export const NOTIFY_ERROR = 'NOTIFY_ERROR';

export const notifySuccessAction = payload => ({ type: NOTIFY_SUCCESS, payload });
export const notifyErrorAction = payload => ({ type: NOTIFY_ERROR, payload });