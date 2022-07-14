import { Dispatch } from 'redux';
import { authConstants } from '../../../constants';
import { authActions } from '../../actions';

export const login = (userName: string, password: string) => {
    return (dispatch: Dispatch<authActions>) => dispatch({
        type: authConstants.LOGIN_REDUX,
        payload: {userName, password}
    })
}
export const logout = () => {
    return (dispatch: Dispatch<authActions>) => dispatch({type: authConstants.LOGOUT_REDUX})
}
export const signin = (userName: string, email: string, password: string) => {
    return (dispatch: Dispatch<authActions>) => dispatch({
        type: authConstants.SIGNIN_REDUX,
        payload: {userName, password, email}
    })
}
export const getme = (userName: string) => {
    return (dispatch: Dispatch<authActions>) => dispatch({
        type: authConstants.GETME_REDUX,
        payload: {userName}
    })
}