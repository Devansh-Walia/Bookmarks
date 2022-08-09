import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { getme, login, logout, signin } from "../../action-creators"

interface loginPayload {
    email: string,
    password: string
}
export const useLogin = () => {
    const dispatch = useDispatch();

    const loggingIn = useCallback(
        (payload: loginPayload) => dispatch(login(payload.email, payload.password)),
        [dispatch]);

    return [loggingIn];
}
interface signinPayload {
    userName: string,
    email: string,
    password: string
}
export const useSignin = () => {
    const dispatch = useDispatch();
    const signingIn = useCallback(
        (payload: signinPayload) => dispatch(signin(payload.userName, payload.email, payload.password)),
        [dispatch]);
    return [signingIn];
}


export const useLogout = () => {
    const dispatch = useDispatch();
    const loggingOut = useCallback(() => dispatch(logout()), [dispatch]);
    return [loggingOut];
}

export const useGetUser = () => {
    const dispatch = useDispatch();
    const getUser = useCallback(() => dispatch(getme()), [dispatch]);

    return [getUser];
}