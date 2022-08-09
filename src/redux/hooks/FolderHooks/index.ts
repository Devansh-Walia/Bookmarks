import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { createFolderAction, getFolderAction } from "../../action-creators/folder";

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
        () => dispatch(getFolderAction()),
        [dispatch]);

    return [getFolder];
}