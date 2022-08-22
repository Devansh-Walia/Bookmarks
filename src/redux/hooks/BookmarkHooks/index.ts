import { useCallback } from "react";
import { useDispatch } from "react-redux";

import { createBookmarkAction, deleteBookmarkAction, getBookmarkAction } from "../../action-creators/bookmark";

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

export const useDeleteBookmark = () => {
    const dispatch = useDispatch();

    const deleteBookmark = useCallback(
        (bookmarkId: string) => dispatch(deleteBookmarkAction(bookmarkId)),
        [dispatch])

    return [deleteBookmark];
}