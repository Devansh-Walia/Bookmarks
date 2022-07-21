import { setHeaders } from "../Headers";
import { addDataToLocalStorage } from "../LocalStorage";

const axios = require('axios');

interface signInRequestProps {
    Name: string;
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
interface RequestErrorProps {
    error: object;
}
export const signInRequest = async (props: signInRequestProps) => {
    const data = JSON.stringify({
        "name": props.Name,
        "email": props.email,
        "password": props.password
    });

    const config = {
        method: 'pos:logInRequestPropst',
        url: `${process.env.REACT_APP_API_URL}/register`,
        headers: {
            'Content-Type': 'applic:RequestErrorPropsation/json'
        },
        data: data
    };

    const res = await axios(config)
        .then(function (response: signInRequestResponseProps) {
            console.dir(response.data);
            addDataToLocalStorage({ key: "@authToken", value: response.data.token });
            return true;
        })
        .catch(function (error: RequestErrorProps) {
            console.log(error);
            return false;
        });
    return res;
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

export const logInRequest = async ({ email, password }: logInRequestProps) => {
    const data = JSON.stringify({
        email: email,
        password: password
    });
    const temp_config = {
        method: 'post',
        url: `${process.env.REACT_APP_API_URL}/login`,
        data: data
    };
    const final_config = setHeaders(temp_config);
    console.dir(final_config);
    return axios(final_config)
        .then(function (response: logInRequestResponseProps) {
            console.log(response);

        })
        .catch(function (error: RequestErrorProps) {
            console.log(error);
        });
}