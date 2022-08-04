import { Dispatch } from 'redux';
import { bookmarkConstants } from '../../../constants';
import { bookmarkActions } from '../../actions';

export const createBookmarkAction = (name: string, url: string,) => {
    return (dispatch: Dispatch<bookmarkActions>) => dispatch({
        type: bookmarkConstants.CREATE,
        payload: { name, url }
    })
}
export const DeleteBookmarkAction = (bid: string) => {
    return (dispatch: Dispatch<bookmarkActions>) => dispatch({ type: bookmarkConstants.DELETE, payload: { bid } })
}
export const getBookmarkAction = (folderId: string) => {
    return (dispatch: Dispatch<bookmarkActions>) => dispatch({
        type: bookmarkConstants.READ,
        payload: { folderId }
    })
}
export const patchBookmarkAction = (bid: string, fid: string) => {
    return (dispatch: Dispatch<bookmarkActions>) => dispatch({
        type: bookmarkConstants.PATCH,
        payload: { bid, fid }
    })
}
export const toggleFavBookmarkAction = (bid: string) => {
    return (dispatch: Dispatch<bookmarkActions>) => dispatch({
        type: bookmarkConstants.TOGGLE,
        payload: { bid }
    })
}
export const changeDetailsBookmarkAction = (bid: string, name: string, url: string) => {
    return (dispatch: Dispatch<bookmarkActions>) => dispatch({
        type: bookmarkConstants.CHANGE_DETAILS,
        payload: { bid, name, url }
    })
}