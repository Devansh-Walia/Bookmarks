import { bookmarkConstants } from '../../../constants';

export const createBookmarkAction = (name: string, url: string,) => {
    return {
        type: bookmarkConstants.CREATE,
        payload: { name, url }
    }
}
export const DeleteBookmarkAction = (bookmarkId: string) => {
    return { type: bookmarkConstants.DELETE, payload: { bookmarkId } }
}
export const getBookmarkAction = (folderId?: string) => {
    return {
        type: bookmarkConstants.READ,
        payload: folderId ? { folderId } : {}
    }
}
export const patchBookmarkAction = (bookmarkId: string, folderId: string) => {
    return {
        type: bookmarkConstants.PATCH,
        payload: { bookmarkId, folderId }
    }
}
export const toggleFavBookmarkAction = (bookmarkId: string) => {
    return {
        type: bookmarkConstants.TOGGLE,
        payload: { bookmarkId }
    }
}
export const changeDetailsBookmarkAction = (bookmarkId: string, name: string, url: string) => {
    return {
        type: bookmarkConstants.CHANGE_DETAILS,
        payload: { bookmarkId, name, url }
    }
}