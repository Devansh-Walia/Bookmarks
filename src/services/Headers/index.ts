import { getDataFromLocalStorage } from "../LocalStorage"

export const setHeaders = (config: object) => {
    const token = getDataFromLocalStorage({ key: '@authToken' });
    return {
        ...config,
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
        }
    }
}
export const setOnlyAuth = (config: object) => {
    const token = getDataFromLocalStorage({ key: '@authToken' });
    return {
        ...config,
        headers: {
            'Authorization': `Bearer ${token}`,
        }
    }
}