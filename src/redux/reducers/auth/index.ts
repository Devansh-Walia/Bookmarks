import { authActions } from "../../actions";
import { authFaliureConstants, authSucessConstants } from '../../../constants'

const initialState = {
    isLoggedin: false,
    isSignedin: false,
}
const reducer = (state: any = initialState, action: authActions) => {
    switch (action.type) {
        case authSucessConstants.LOGIN:
            console.log("user redux login success")
            return { ...state, isLoggedin: true };

        case authFaliureConstants.LOGIN:
            console.log("user redux login fail")
            return state;
        case authSucessConstants.SIGNIN:
            console.log("user redux signin success")
            return { ...state, isSignedin: true };

        case authFaliureConstants.SIGNIN:
            console.log("user redux signin fail")
            return state;
        case authSucessConstants.LOGOUT:
            console.log("user redux logout  success")
            return { isLoggedIn: false, isSignedin: false };

        case authFaliureConstants.LOGOUT:
            console.log("user redux  logout fail")
            return state;

        default:
            return state;
    }
}

export default reducer;