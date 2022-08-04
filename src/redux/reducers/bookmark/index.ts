import { bookmarkActions } from "../../actions";
import { bookmarkFaliureConstants, bookmarkSucessConstants } from '../../../constants'

const initialState = {
    bookmarks: {},
    error: ""
}
const reducer = (state: any = initialState, action: bookmarkActions) => {
    switch (action.type) {
        case bookmarkSucessConstants.CREATE:
            console.log("user redux creating success")
            return { error: "", bookmarks: { ...action.payload } };

        case bookmarkFaliureConstants.CREATE:
            console.log("user redux creating fail")
            return { ...state, error: "failed to create bookmark" };

        case bookmarkSucessConstants.DELETE:
            console.log("user redux delete success")
            return { error: "", bookmarks: { ...action.payload } };

        case bookmarkFaliureConstants.DELETE:
            console.log("user redux delete fail")
            return { ...state, error: "failed to delete bookmark" };

        case bookmarkSucessConstants.READ:
            console.log("user redux.READ  success")
            return { error: "", bookmarks: { ...action.payload } };

        case bookmarkFaliureConstants.READ:
            console.log("user redux .READ fail")
            return { ...state, error: "failed to read bookmarks" };

        case bookmarkSucessConstants.PATCH:
            console.log("user redux.PATCH  success")
            return { error: "", bookmarks: { ...action.payload } };

        case bookmarkFaliureConstants.PATCH:
            console.log("user redux .PATCH fail")
            return { ...state, error: "failed to.PATCH bookmarks" };
        case bookmarkSucessConstants.TOGGLE:
            console.log("user redux.TOGGLE  success")
            return { error: "", bookmarks: { ...action.payload } };

        case bookmarkFaliureConstants.TOGGLE:
            console.log("user redux .TOGGLE fail")
            return { ...state, error: "failed to.TOGGLE bookmarks" };
        case bookmarkSucessConstants.CHANGE_DETAILS:
            console.log("user redux.CHANGE_DETAILS  success")
            return { error: "", bookmarks: { ...action.payload } };

        case bookmarkFaliureConstants.CHANGE_DETAILS:
            console.log("user redux .CHANGE_DETAILS fail")
            return { ...state, error: "failed to.CHANGE_DETAILS bookmarks" };

        default:
            return state;
    }
}

export default reducer;