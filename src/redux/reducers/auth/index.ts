import { authActions } from "../../actions";
import { authFaliureConstants, authSucessConstants } from '../../../constants'
const initialState = {
    userName: '',
    email: '',
}
const reducer = (state: object = initialState, action: authActions) => {
    switch (action.type) {
        case authSucessConstants.LOGIN:
            console.log("user redux login success")
            return state;
        case authFaliureConstants.LOGIN:
            console.log("user redux login fail")
            return state;

        default:
            return state;
    }
}

export default reducer;