import { login } from "../../action-creators"

interface loginPayload {
    userName: string,
    password: string
}
export const useLogin = (payload: loginPayload) => {
    login(payload.userName, payload.password);
}