import axios from "axios";

const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_API_URL
});

axiosInstance.interceptors.response.use(
    response => response.data,
    error => {
        // Do something with response error
        return Promise.reject(error);
    }
);

export default axiosInstance;
