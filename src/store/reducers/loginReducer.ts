import { Action } from '../../shared';
import { LoginState } from '../../shared/model/LoginTypes';
import * as actionTypes from '../actions/actionTypes';

export const initialState:LoginState = {
  isAuthenticated: false,
  isError: false,
  isSubmitting: false,
  errorMessage: ''
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const loginReducer = (state = initialState, { type, payload }:Action<any>):LoginState => {
  switch (type) {
    case actionTypes.SUBMITTING: {
      return {
        ...state,
        isSubmitting: true
      };
    }
    case actionTypes.LOGIN_SUCCESS: {
      return {
        ...state,
        isAuthenticated: true,
        isSubmitting: false
      };
    }
    case actionTypes.LOGIN_FAIL: {
      const { errorMessage } = payload;
      return {
        ...state,
        isAuthenticated: false,
        isError: true,
        isSubmitting: false,
        errorMessage
      };
    }

    case actionTypes.ON_LOGOUT: {
      return {
        ...initialState,
        isAuthenticated: false
      };
    }
    default:
      return initialState;
  }
};
