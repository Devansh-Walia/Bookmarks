import { authActions } from "../../actions";
import { authFaliureConstants, authSucessConstants } from '../../../constants'
const initialState = {}
const reducer = (state: object = initialState, action: authActions) => {
    switch (action.type) {
        case authSucessConstants.LOGIN:
            console.log("user redux login success")
            return true;
        case authFaliureConstants.LOGIN:
            console.log("user redux login fail")
            console.log("failed login");

            return false;

        default:
            return state;
    }
}

export default reducer;