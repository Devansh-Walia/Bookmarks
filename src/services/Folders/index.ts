import { setHeaders, setOnlyAuth } from "../Headers";

const axios = require('axios');

interface createProps {
    name: string;
    parentId: string;
}
export const createFolder = async (props: createProps): Promise<any> => {
    const data = JSON.stringify({
        "parentId": props.parentId,
        "name": props.name
    });

    const temp_config = {
        method: 'post',
        url: `${process.env.REACT_APP_API_URL}/folder`,
        data: data
    };
    const config = setHeaders(temp_config);

    return await axios(config);
}

interface DeleteProps {
    folderId: string;
}
export const DeleteFolder = async (props: DeleteProps): Promise<any> => {
    const data = JSON.stringify({
        "folderId": props.folderId
    });
    const temp_config = {
        method: 'DELETE',
        url: `${process.env.REACT_APP_API_URL}/folder`,
        data: data
    };
    const config = setHeaders(temp_config);
    return await axios(config);
}

interface GetProps {
    folderId?: string;
}
export const getFolder = async (props: GetProps): Promise<any> => {
    const data = '';
    const temp_config = {
        method: 'GET',
        url: (props.folderId) ?
            `${process.env.REACT_APP_API_URL}/folders?folderId=${props.folderId}` :
            `${process.env.REACT_APP_API_URL}/folders`
        ,
        data: data
    };
    const config = setOnlyAuth(temp_config);
    return await axios(config);
}

interface renameProps {
    folderId: string;
    name: string;
}
export const renameFolder = async (props: renameProps): Promise<any> => {
    const data = JSON.stringify({
        "folderId": props.folderId,
        "name": props.name
    });
    const temp_config = {
        method: 'GET',
        url: `${process.env.REACT_APP_API_URL}/rename-folder`,
        data: data
    };
    const config = setHeaders(temp_config);
    return await axios(config);
}
