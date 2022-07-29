import { Dispatch } from 'redux';
import { authConstants } from '../../../constants';
import { authActions } from '../../actions';

export const login = (email: string, password: string) => {
    return (dispatch: Dispatch<authActions>) => dispatch({
        type: authConstants.LOGIN,
        payload: { email, password }
    })
}
export const logout = () => {
    return (dispatch: Dispatch<authActions>) => dispatch({ type: authConstants.LOGOUT })
}
export const signin = (userName: string, email: string, password: string) => {
    return (dispatch: Dispatch<authActions>) => dispatch({
        type: authConstants.SIGNIN,
        payload: { userName, password, email }
    })
}
export const getme = (userName: string) => {
    return (dispatch: Dispatch<authActions>) => dispatch({
        type: authConstants.GETME,
        payload: { userName }
    })
}