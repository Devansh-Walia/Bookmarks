import { folderActions } from "../../actions";
import { folderFaliureConstants, folderSucessConstants } from '../../../constants'

const initialState = {
    folders: {},
    error: ""
}
const reducer = (state: any = initialState, action: folderActions) => {
    switch (action.type) {
        case folderSucessConstants.CREATE:
            console.log("user redux creating success")
            return { error: "", folders: { ...action.payload } };

        case folderFaliureConstants.CREATE:
            console.log("user redux creating fail")
            return { ...state, error: "failed to create folder" };

        case folderSucessConstants.DELETE:
            console.log("user redux delete success")
            return { error: "", folders: { ...action.payload } };

        case folderFaliureConstants.DELETE:
            console.log("user redux delete fail")
            return { ...state, error: "failed to delete folder" };

        case folderSucessConstants.READ:
            console.log("user redux.READ  success")
            return { error: "", folders: { ...action.payload } };

        case folderFaliureConstants.READ:
            console.log("user redux .READ fail")
            return { ...state, error: "failed to read folders" };

        case folderSucessConstants.UPDATE:
            console.log("user redux.UPDATE  success")
            return { error: "", folders: { ...action.payload } };

        case folderFaliureConstants.UPDATE:
            console.log("user redux .UPDATE fail")
            return { ...state, error: "failed to update folders" };

        default:
            return state;
    }
}

export default reducer;