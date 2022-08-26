import { authActions } from '../../actions';
import {
  authConstants,
  authFailureConstants,
  authSuccessConstants
} from '../../../constants';

const initialState = {
  user: null,
  isSignedin: false,
  isLoggedin: false,
  isLoading: false,
  error: null,
  LoginProps: { email: '' }
};

const reducer = (state: any = initialState, action: authActions) => {
  switch (action.type) {
    case authSuccessConstants.LOGIN:
      return { ...state, isLoggedin: true };
    case authFailureConstants.LOGIN:
      return { ...state, error: 'Log in failure, check email or password' };

    case authSuccessConstants.SIGNUP:
      return {
        ...state,
        isSignedin: true,
        LoginProps: { email: action.payload.email }
      };
    case authFailureConstants.SIGNUP:
      return {
        ...state,
        error: 'Sign up faliure, user already exists with the email'
      };

    case authSuccessConstants.LOGOUT:
      return { ...initialState };
    case authFailureConstants.LOGOUT:
      return state;

    case authConstants.GET_ME:
      return { ...state, isLoading: true };
    case authSuccessConstants.GET_ME:
      return { ...state, user: action.payload, isLoading: false };
    case authFailureConstants.GET_ME:
      return { ...state, user: null, isLoading: false };

    default:
      return { ...state, error: null };
  }
};

export default reducer;
