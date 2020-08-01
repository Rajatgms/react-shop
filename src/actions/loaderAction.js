import { createAction } from '@reduxjs/toolkit';

export const LOADER = 'LOADER';

export const startLoaderAction = createAction(LOADER);
