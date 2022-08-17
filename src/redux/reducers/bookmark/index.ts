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
            console.log('bookmarkSuccessConstants.CREATE')
            return { ...state, error: "", bookmarks: [...state.bookmarks, action.payload.bookmark] };

        case bookmarkFailureConstants.CREATE:
            console.log('bookmarkFailureConstants.CREATE')
            return { ...state, error: "failed to create bookmark" };

        case bookmarkSuccessConstants.DELETE:
            console.log('bookmarkSuccessConstants.DELETE')
            return { error: "", bookmarks: action.payload };

        case bookmarkFailureConstants.DELETE:
            console.log('bookmarkFailureConstants.DELETE')
            return { ...state, error: "failed to delete bookmark" };

        case bookmarkConstants.READ:
            return { ...state, isLoading: true }
        case bookmarkSuccessConstants.READ:
            console.log('bookmarkSuccessConstants.READ')
            return { error: "", bookmarks: action.payload, isLoading: false };

        case bookmarkFailureConstants.READ:
            console.log('bookmarkFailureConstants.READ')
            return { ...state, error: "failed to read bookmarks", isLoading: false };

        case bookmarkSuccessConstants.PATCH:
            console.log('bookmarkSuccessConstants.PATCH')
            return { error: "", bookmarks: action.payload };

        case bookmarkFailureConstants.PATCH:
            console.log('bookmarkFailureConstants.PATCH')
            return { ...state, error: "failed to.PATCH bookmarks" };
        case bookmarkSuccessConstants.TOGGLE:
            console.log('bookmarkSuccessConstants.TOGGLE')
            return { error: "", bookmarks: action.payload };

        case bookmarkFailureConstants.TOGGLE:
            console.log('bookmarkFailureConstants.TOGGLE')
            return { ...state, error: "failed to.TOGGLE bookmarks" };
        case bookmarkSuccessConstants.CHANGE_DETAILS:
            console.log('bookmarkSuccessConstants.CHANGE_DETAILS')
            return { error: "", bookmarks: action.payload };

        case bookmarkFailureConstants.CHANGE_DETAILS:
            return { ...state, error: "failed to.CHANGE_DETAILS bookmarks" };

        default:
            return { ...state, error: null };
    }
}

export default reducer;