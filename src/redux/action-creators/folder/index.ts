import { Dispatch } from 'redux';
import { folderConstants } from '../../../constants';
import { folderActions } from '../../actions';

export const createFolderAction = (parentId: string, name: string) => {
    return (dispatch: Dispatch<folderActions>) => dispatch({
        type: folderConstants.CREATE,
        payload: { parentId, name }
    })
}
export const DeletefolderAction = (fid: string) => {
    return (dispatch: Dispatch<folderActions>) => dispatch({
        type: folderConstants.DELETE,
        payload: { fid: fid }
    })
}
export const getFolderAction = (folderId: string) => {
    return (dispatch: Dispatch<folderActions>) => dispatch({
        type: folderConstants.READ,
        payload: { folderId }
    })
}
export const renameFolderAction = (name: string, folderId: string) => {
    return (dispatch: Dispatch<folderActions>) => dispatch({
        type: folderConstants.UPDATE,
        payload: { name, folderId }
    })
}