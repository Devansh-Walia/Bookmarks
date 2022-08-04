import { authActions } from "../../actions";
import { authFaliureConstants, authSucessConstants } from '../../../constants'

const initialState = {
    isLoggedin: false,
    isSignedin: false,
}
const reducer = (state: any = initialState, action: authActions) => {
    switch (action.type) {
        case authSucessConstants.LOGIN:
            return { ...state, isLoggedin: true };

        case authFaliureConstants.LOGIN:
            return state;
        case authSucessConstants.SIGNIN:
            return { ...state, isSignedin: true };

        case authFaliureConstants.SIGNIN:
            return state;
        case authSucessConstants.LOGOUT:
            return { isLoggedin: false, isSignedin: false };

        case authFaliureConstants.LOGOUT:
            return state;
        default:
            return state;
    }
}

export default reducer;