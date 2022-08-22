import { setHeaders } from "../Headers";
import { removeDataFromLocalStorage } from "../LocalStorage";

const axios = require('axios');

interface signInRequestProps {
    userName: string;
    email: string;
    password: string;
}
interface signInRequestResponseProps {
    data: {
        name: string;
        email: string;
        createdAt: string;
        id: string;
        updatedAt: string;
        deletedAt: string;
        isEmailVerified: string;
        token: string;
    }
}
export const signInRequest = async (props: signInRequestProps): Promise<signInRequestResponseProps> => {
    const data = JSON.stringify({
        "name": props.userName,
        "email": props.email,
        "password": props.password
    });
    const config = {
        method: 'POST',
        url: `${process.env.REACT_APP_API_URL}/register`,
        headers: {
            'Content-Type': 'application/json'
        },
        data: data
    };
    return await axios(config);
}

interface logInRequestProps {
    email: string;
    password: string;
}
interface logInRequestResponseProps {
    data: {
        name: string;
        email: string;
        createdAt: string;
        id: string;
        updatedAt: string;
        deletedAt: string;
        isEmailVerified: string;
        token: string;
    }
}
export const logInRequest = async ({ email, password }: logInRequestProps): Promise<logInRequestResponseProps> => {
    const data = JSON.stringify({
        "email": email,
        "password": password
    });
    const temp_config = {
        method: 'POST',
        url: `${process.env.REACT_APP_API_URL}/login`,
        data: data
    };
    const final_config = setHeaders(temp_config);
    return await axios(final_config)
}

export const logoutRequest = async () => {
    removeDataFromLocalStorage({ key: "@authToken" });
}

export const getmeRequest = async () => {
    const temp_config = {
        method: 'GET',
        url: `${process.env.REACT_APP_API_URL}/me`,
    };
    const final_config = setHeaders(temp_config);
    return await axios(final_config)
}