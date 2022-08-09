import { bookmarkActions } from "../../actions";
import { bookmarkFaliureConstants, bookmarkSucessConstants } from '../../../constants'

const initialState = {
    bookmarks: [],
    error: "",
    isLoading: true
}
const reducer = (state: any = initialState, action: bookmarkActions) => {
    switch (action.type) {
        case bookmarkSucessConstants.CREATE:
            console.log('bookmarkSucessConstants.CREATE')
            return { error: "", bookmarks: action.payload };

        case bookmarkFaliureConstants.CREATE:
            console.log('bookmarkFaliureConstants.CREATE')
            return { ...state, error: "failed to create bookmark" };

        case bookmarkSucessConstants.DELETE:
            console.log('bookmarkSucessConstants.DELETE')
            return { error: "", bookmarks: action.payload };

        case bookmarkFaliureConstants.DELETE:
            console.log('bookmarkFaliureConstants.DELETE')
            return { ...state, error: "failed to delete bookmark" };

        case bookmarkSucessConstants.READ:
            console.log('bookmarkSucessConstants.READ')
            return { error: "", bookmarks: action.payload, isLoading: false };

        case bookmarkFaliureConstants.READ:
            console.log('bookmarkFaliureConstants.READ')
            return { ...state, error: "failed to read bookmarks", isLoading: false };

        case bookmarkSucessConstants.PATCH:
            console.log('bookmarkSucessConstants.PATCH')
            return { error: "", bookmarks: action.payload };

        case bookmarkFaliureConstants.PATCH:
            console.log('bookmarkFaliureConstants.PATCH')
            return { ...state, error: "failed to.PATCH bookmarks" };
        case bookmarkSucessConstants.TOGGLE:
            console.log('bookmarkSucessConstants.TOGGLE')
            return { error: "", bookmarks: action.payload };

        case bookmarkFaliureConstants.TOGGLE:
            console.log('bookmarkFaliureConstants.TOGGLE')
            return { ...state, error: "failed to.TOGGLE bookmarks" };
        case bookmarkSucessConstants.CHANGE_DETAILS:
            console.log('bookmarkSucessConstants.CHANGE_DETAILS')
            return { error: "", bookmarks: action.payload };

        case bookmarkFaliureConstants.CHANGE_DETAILS:
            return { ...state, error: "failed to.CHANGE_DETAILS bookmarks" };

        default:
            return state;
    }
}

export default reducer;