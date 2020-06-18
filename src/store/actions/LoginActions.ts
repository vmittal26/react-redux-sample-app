import { LoginValues } from './../../shared/model/LoginTypes';
import { AnyAction } from 'redux';
import * as actionTypes from './actionTypes';

export const loginFailed = (errorMessage: string): AnyAction => ({
  type: actionTypes.LOGIN_FAIL,
  payload: {
    errorMessage
  }
});

export const loginSuccess = (): AnyAction => ({
  type: actionTypes.LOGIN_SUCCESS
});

export const logOut = (): AnyAction => ({
  type: actionTypes.ON_LOGOUT
});


export const submitting = (): AnyAction => ({
  type: actionTypes.SUBMITTING
});

export const onLogin = (loginValues:LoginValues):AnyAction=>({
  type: actionTypes.ON_LOGIN,
  ...loginValues
});
