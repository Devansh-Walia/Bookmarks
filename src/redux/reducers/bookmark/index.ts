import { bookmarkActions } from "../../actions";
import { bookmarkConstants, bookmarkFailureConstants, bookmarkSuccessConstants } from '../../../constants'

const initialState = {
    bookmarks: [],
    error: "",
    isLoading: false
}
const reducer = (state: any = initialState, action: bookmarkActions) => {
    switch (action.type) {
        case bookmarkSuccessConstants.CREATE:
            return { ...state, error: "", bookmarks: [...state.bookmarks, action.payload.bookmark] };

        case bookmarkFailureConstants.CREATE:
            return { ...state, error: "failed to create bookmark" };

        case bookmarkSuccessConstants.DELETE:
            var newBookmarks = state.bookmarks;
            newBookmarks = newBookmarks.filter((bookmark: { id?: string, createdAt?: string }) => bookmark.id !== action.payload.id);

            return { error: "", bookmarks: newBookmarks };

        case bookmarkFailureConstants.DELETE:
            return { ...state, error: "failed to delete bookmark" };

        case bookmarkConstants.READ:
            return { ...state, isLoading: true }
        case bookmarkSuccessConstants.READ:
            return { error: "", ...action.payload, isLoading: false };

        case bookmarkFailureConstants.READ:
            return { ...state, error: "failed to read bookmarks", isLoading: false };

        case bookmarkSuccessConstants.PATCH:
            return { error: "", bookmarks: action.payload };

        case bookmarkFailureConstants.PATCH:
            return { ...state, error: "failed to.PATCH bookmarks" };
        case bookmarkSuccessConstants.TOGGLE:
            return { error: "", bookmarks: action.payload };

        case bookmarkFailureConstants.TOGGLE:
            return { ...state, error: "failed to.TOGGLE bookmarks" };
        case bookmarkSuccessConstants.CHANGE_DETAILS:
            return { error: "", bookmarks: action.payload };

        case bookmarkFailureConstants.CHANGE_DETAILS:
            return { ...state, error: "failed to.CHANGE_DETAILS bookmarks" };

        default:
            return { ...state, error: null };
    }
}

export default reducer;