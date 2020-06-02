import { getLoginAPIURL } from './../api/getLoginAPIURL';
import { AUTHENTICATION_FAIL, ERROR_LOGIN } from './../constants/Constants';
import { Action } from '../model/SharedTypes';
import { loginFailed, loginSuccess, submitting } from './../../actions/LoginActions';

/* eslint-disable @typescript-eslint/no-explicit-any */
import { LoginValues } from './../model/LoginTypes';

export const fetchUserInfo = async (
  loginValues: LoginValues, dispatch: React.Dispatch<Action<any>>): Promise<void> => {
  dispatch(submitting());
  try {
    const { userName, password } = loginValues;
    const result = await fetch(getLoginAPIURL(userName));
    const data = await result.json();
    const { count, results } = data;
    if (count === 1) {
      const userInfo = results[0];
      const name = userInfo.name;
      const birthYear = userInfo.birth_year;
      const isAuthenticated = name === userName && birthYear === password;
      if (isAuthenticated) {
        dispatch(loginSuccess());
      } else {
        dispatch(loginFailed(AUTHENTICATION_FAIL));
      }
    } else {
      dispatch(loginFailed(AUTHENTICATION_FAIL));
    }
  } catch (error) {
    dispatch(loginFailed(ERROR_LOGIN));
  }
};
