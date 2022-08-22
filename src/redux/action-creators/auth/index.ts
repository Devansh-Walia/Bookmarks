import { authConstants } from '../../../constants';


export const login = (email: string, password: string, navigate: any) => {
    return {
        type: authConstants.LOGIN,
        payload: { email, password, navigate }
    }
}

export const logout = () => {
    return { type: authConstants.LOGOUT }
}

export const signin = (userName: string, email: string, password: string) => {
    return {
        type: authConstants.SIGNIN,
        payload: { userName, password, email }
    }
}

export const getme = () => {
    return {
        type: authConstants.GETME,
        payload: {}
    }
}