import { useDispatch } from "react-redux";
import { login } from "../../action-creators"

interface loginPayload {
    email: string,
    password: string
}
export const useLogin = () => {
    const dispatch = useDispatch();
    const loggingIn = (payload: loginPayload) => login(payload.email, payload.password)(dispatch);
    return [loggingIn];
}

