import { authActions } from "../../actions";
import { authFaliureConstants, authSucessConstants } from '../../../constants'

const initialState = {
    user: null,
    isSignedin: false,
    isLoggedin: false,
    isLoading: true,
    error: null
}
const reducer = (state: any = initialState, action: authActions) => {
    switch (action.type) {
        case authSucessConstants.LOGIN:
            console.log('authSucessConstants.LOGIN')
            return { ...state, isLoggedin: true };
        case authFaliureConstants.LOGIN:
            console.log('authFaliureConstants.LOGIN')
            return { ...state, error: "Log in faliure, check email or password" };

        case authSucessConstants.SIGNIN:
            console.log('authSucessConstants.SIGNIN')
            return { ...state, isSignedin: true };
        case authFaliureConstants.SIGNIN:
            console.log('authFaliureConstants.SIGNIN')
            return { ...state, error: "Sign up faliure, user already exists with the email" };

        case authSucessConstants.LOGOUT:
            console.log('authSucessConstants.LOGOUT')
            return { isLoggedin: false, isSignedin: false };
        case authFaliureConstants.LOGOUT:
            console.log('authFaliureConstants.LOGOUT')
            return state;


        case authSucessConstants.GETME:
            console.log('authSucessConstants.GETME')
            return { ...state, user: action.payload, isLoading: false };
        case authFaliureConstants.GETME:
            console.log('authFaliureConstants.GETME')
            return { ...state, user: null, isLoading: false };

        default:
            return { ...state, error: null };
    }
}

export default reducer;