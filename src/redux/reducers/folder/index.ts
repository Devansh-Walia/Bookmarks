import { folderActions } from "../../actions";
import { folderFaliureConstants, folderSucessConstants } from '../../../constants'

const initialState = {
    folders: {},
    error: "",
    isLoading: true
}
const reducer = (state: any = initialState, action: folderActions) => {
    switch (action.type) {
        case folderSucessConstants.CREATE:
            console.log('folderSucessConstants.CREATE')
            return { error: "", folders: action.payload };

        case folderFaliureConstants.CREATE:
            console.log('folderFaliureConstants.CREATE')
            return { ...state, error: "failed to create folder" };

        case folderSucessConstants.DELETE:
            console.log('folderSucessConstants.DELETE')
            return { error: "", folders: action.payload };

        case folderFaliureConstants.DELETE:
            console.log('folderFaliureConstants.DELETE')
            return { ...state, error: "failed to delete folder" };

        case folderSucessConstants.READ:
            console.log('folderSucessConstants.READ')
            return { error: "", folders: action.payload, isLoading: false };

        case folderFaliureConstants.READ:
            console.log('folderFaliureConstants.READ')
            return { ...state, error: "failed to read folders", isLoading: false };

        case folderSucessConstants.UPDATE:
            console.log('folderSucessConstants.UPDATE')
            return { error: "", folders: action.payload };

        case folderFaliureConstants.UPDATE:
            console.log('folderFaliureConstants.UPDATE')
            return { ...state, error: "failed to update folders" };

        default:
            return state;
    }
}

export default reducer;