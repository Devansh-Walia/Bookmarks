import { getDataFromLocalStorage } from "../LocalStorage"

export const setHeaders = (config: object) => {
    const token = getDataFromLocalStorage({ key: '@authToken' });
    console.log(token);
    return {
        ...config,
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
        }
    }
}