import { authActions } from "../../actions";
import { authConstants, authFailureConstants, authSuccessConstants } from '../../../constants'

const initialState = {
    user: null,
    isSignedin: false,
    isLoggedin: false,
    isLoading: false,
    error: null
}
const reducer = (state: any = initialState, action: authActions) => {
    switch (action.type) {
        case authSuccessConstants.LOGIN:
            console.log('authSuccessConstants.LOGIN')
            return { ...state, isLoggedin: true };
        case authFailureConstants.LOGIN:
            console.log('authFailureConstants.LOGIN')
            return { ...state, error: "Log in faliure, check email or password" };

        case authSuccessConstants.SIGNIN:
            console.log('authSuccessConstants.SIGNIN')
            return { ...state, isSignedin: true };
        case authFailureConstants.SIGNIN:
            console.log('authFailureConstants.SIGNIN')
            return { ...state, error: "Sign up faliure, user already exists with the email" };

        case authSuccessConstants.LOGOUT:
            console.log('authSuccessConstants.LOGOUT')
            return { isLoggedin: false, isSignedin: false };
        case authFailureConstants.LOGOUT:
            console.log('authFailureConstants.LOGOUT')
            return state;

        case authConstants.GETME:
            return { ...state, isLoading: true };
        case authSuccessConstants.GETME:
            console.log('authSuccessConstants.GETME')
            return { ...state, user: action.payload, isLoading: false };
        case authFailureConstants.GETME:
            console.log('authFailureConstants.GETME')
            return { ...state, user: null, isLoading: false };

        default:
            return { ...state, error: null };
    }
}

export default reducer;