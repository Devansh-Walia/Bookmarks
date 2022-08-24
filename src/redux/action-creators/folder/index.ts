import { folderConstants } from '../../../constants';

export const createFolderAction = (parentId: string, name: string) => {
    return {
        type: folderConstants.CREATE,
        payload: { parentId, name }
    }
}

export const deleteFolderAction = (fid: string) => {
    return {
        type: folderConstants.DELETE,
        payload: fid
    }
}

export const getFolderAction = (folderId?: string) => {
    return {
        type: folderConstants.READ,
        payload: folderId ? { folderId } : {}
    }
}

export const renameFolderAction = (name: string, folderId: string) => {
    return {
        type: folderConstants.UPDATE,
        payload: { name, folderId }
    }
}


export const getChildrenAction = (folderId: string) => {
    return {
        type: folderConstants.READ_CHILDREN,
        payload: folderId
    }
}