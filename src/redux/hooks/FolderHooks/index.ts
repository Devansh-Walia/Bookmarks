import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { createFolderAction, getChildrenAction, getFolderAction } from "../../action-creators/folder";

interface AddPayload {
    url: string;
    folder: string;
}
export const useAddFolder = () => {
    const dispatch = useDispatch();
    const addFolder = useCallback(
        (payload: AddPayload) => dispatch(createFolderAction(payload.folder, payload.url)),
        [dispatch]);

    return [addFolder];
}

export const useGetFolder = () => {
    const dispatch = useDispatch();
    const getFolder = useCallback(
        (folderId?: string) => dispatch(getFolderAction()),
        [dispatch]);

    return [getFolder];
}
export const useGetChildren = () => {
    const dispatch = useDispatch();
    const getChildren = useCallback(
        (folderId: string) => dispatch(getChildrenAction(folderId)),
        [dispatch]);

    return [getChildren];
}