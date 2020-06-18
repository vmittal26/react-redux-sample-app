/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { AnyAction } from 'redux';
import { put } from 'redux-saga/effects';

import { AUTHENTICATION_FAIL, ERROR_LOGIN } from '../../shared';
import { getLoginAPIURL } from './../../shared/api/getLoginAPIURL';
import * as actions from './../actions/LoginActions';


// eslint-disable-next-line func-names
export const loginSaga = function*(action:AnyAction) {
  const { userName, password } = action;
  yield put(actions.submitting());
  try {
    const result = yield fetch(getLoginAPIURL(userName));
    const data = yield result.json();
    const { count, results } = data;
    if (count === 1) {
      const userInfo = results[0];
      const name = userInfo.name;
      const birthYear = userInfo.birth_year;
      const isAuthenticated = name === userName && birthYear === password;
      if (isAuthenticated) {
        yield put(actions.loginSuccess());
      } else {
        yield put(actions.loginFailed(AUTHENTICATION_FAIL));
      }
    } else {
      yield put(actions.loginFailed(AUTHENTICATION_FAIL));
    }
  } catch (error) {
    yield put(actions.loginFailed(ERROR_LOGIN));
  }
};
