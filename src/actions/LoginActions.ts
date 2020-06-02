import { LOGIN_FAIL, LOGIN_SUCCESS, SUBMITTING } from './../shared/constants/Constants';
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Action } from './../shared/model/SharedTypes';

export const loginFailed = (errorMessage:string):Action<any> => ({
  type: LOGIN_FAIL,
  payload: {
    errorMessage
  }
});

export const loginSuccess = ():Action<any> => ({
  type: LOGIN_SUCCESS
});

export const submitting = ():Action<any> => ({
  type: SUBMITTING
});
