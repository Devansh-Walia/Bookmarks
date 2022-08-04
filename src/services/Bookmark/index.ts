import { setHeaders, setOnlyAuth } from "../Headers";

const axios = require('axios');

interface createProps {
    name: string;
    url: string;
}
export const createBookmark = async (props: createProps): Promise<any> => {
    const data = JSON.stringify({
        "url": props.url,
        "name": props.name
    });

    const temp_config = {
        method: 'post',
        url: `${process.env.REACT_APP_API_URL}/bookmark`,
        data: data
    };
    const config = setHeaders(temp_config);

    return await axios(config);
}

interface DeleteProps {
    bookmarkId: string;
}

export const DeleteBookmark = async (props: DeleteProps): Promise<any> => {
    const data = JSON.stringify({
        "bookmarkId": props.bookmarkId
    });
    const temp_config = {
        method: 'DELETE',
        url: `${process.env.REACT_APP_API_URL}/bookmark`,
        data: data
    };
    const config = setHeaders(temp_config);
    return await axios(config);
}

interface GetProps {
    folderId: string;
}
export const getBookmark = async (props: GetProps): Promise<any> => {
    const data = '';
    const temp_config = {
        method: 'GET',
        url: `${process.env.REACT_APP_API_URL}folder-bookmarks?"folderId"="${props.folderId}"`,
        data: data
    };
    const config = setOnlyAuth(temp_config);
    return await axios(config);
}

interface patchProps {
    bookmarkId: string;
    folderId: string;
}
export const patchBookmark = async (props: patchProps): Promise<any> => {
    const data = JSON.stringify({
        "bookmarkId": props.bookmarkId,
        "folderId": props.folderId
    });
    const temp_config = {
        method: 'patch',
        url: `${process.env.REACT_APP_API_URL}/move-bookmark`,
        data: data
    };
    const config = setHeaders(temp_config);
    return await axios(config);
}

interface toggleFavProps {
    bookmarkId: string;
}
export const toggleFavBookmark = async (props: toggleFavProps): Promise<any> => {
    const data = JSON.stringify({
        "bookmarkId": props.bookmarkId,
    });
    const temp_config = {
        method: 'put',
        url: `${process.env.REACT_APP_API_URL}/toggle-favorite`,
        data: data
    };
    const config = setHeaders(temp_config);
    return await axios(config);
}

interface changeDetailsProps {
    bookmarkId: string;
    name: string;
    url: string;
}
export const changeDetailsBookmark = async (props: changeDetailsProps): Promise<any> => {
    const data = JSON.stringify({
        "bookmarkId": props.bookmarkId,
        "name": props.name,
        "url": props.url
    });
    const temp_config = {
        method: 'put',
        url: `${process.env.REACT_APP_API_URL}/update-details`,
        data: data
    };
    const config = setHeaders(temp_config);
    return await axios(config);
}