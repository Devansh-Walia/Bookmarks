import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { login, logout, signin } from "../../action-creators"

interface loginPayload {
    email: string,
    password: string
}
export const useLogin = () => {
    const dispatch = useDispatch();

    const loggingIn = useCallback((payload: loginPayload) => login(payload.email, payload.password)(dispatch), [dispatch]);

    return [loggingIn];
}
interface signinPayload {
    userName: string,
    email: string,
    password: string
}
export const useSignin = () => {
    const dispatch = useDispatch();
    const signingIn = (payload: signinPayload) => signin(payload.userName, payload.email, payload.password)(dispatch);
    return [signingIn];
}


export const useLogout = () => {
    const dispatch = useDispatch();
    const loggingOut = () => logout()(dispatch);
    return [loggingOut];
}
