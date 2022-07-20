interface addDataProps {
    key: string;
    value: any;
}
interface removeDataProps {
    key: string
}
interface getDataProps {
    key: string;
}
export const addDataToLocalStorage = ({ key, value }: addDataProps) => {
    localStorage.setItem(key, value);
}

export const getDataFromLocalStorage = ({ key }: getDataProps) => {
    localStorage.getItem(key);
}

export const removeDataFromLocalStorage = ({ key }: removeDataProps) => {
    if (key === "@authToken")
        localStorage.clear()
    else
        localStorage.removeItem(key)
}

