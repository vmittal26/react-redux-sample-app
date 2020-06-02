import { SUBMITTING, LOGIN_SUCCESS, LOGIN_FAIL } from './../shared/constants/Constants';
import { Action } from '../shared';
import { LoginState } from '../shared/model/LoginTypes';


export const initialState:LoginState = {
  isAuthenticated: false,
  isError: false,
  isSubmitting: false,
  errorMessage: ''
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const loginReducer = (state = initialState, { type, payload }:Action<any>):LoginState => {
  switch (type) {
    case SUBMITTING: {
      return {
        ...state,
        isSubmitting: true
      };
    }
    case LOGIN_SUCCESS: {
      return {
        ...state,
        isAuthenticated: true,
        isSubmitting: false
      };
    }
    case LOGIN_FAIL: {
      const { errorMessage } = payload;
      return {
        ...state,
        isAuthenticated: false,
        isError: true,
        isSubmitting: false,
        errorMessage
      };
    }
    default:
      return initialState;
  }
};
