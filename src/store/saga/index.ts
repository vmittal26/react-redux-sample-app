import { takeEvery } from 'redux-saga/effects';
import * as actionTypes from '../actions/actionTypes';
import { loginSaga } from './logInSaga';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default function* watchLogin() {
  yield takeEvery(actionTypes.ON_LOGIN, loginSaga);
}
