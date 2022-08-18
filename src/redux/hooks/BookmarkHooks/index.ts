import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { createBookmarkAction, getBookmarkAction } from "../../action-creators/bookmark";

interface AddPayload {
    url: string;
    folderId?: string;
    name?: string;
}
export const useAddBookmark = () => {
    const dispatch = useDispatch();
    const addBookmark = useCallback(
        (payload: AddPayload) => dispatch(createBookmarkAction(payload.url, payload.folderId)),
        [dispatch]);

    return [addBookmark];
}

export const useGetBookmark = () => {
    const dispatch = useDispatch();
    const getBookmark = useCallback(
        (folderId?: string) => dispatch(getBookmarkAction(folderId)),
        [dispatch]);

    return [getBookmark];
}