import { folderActions } from "../../actions";
import { folderConstants, folderFailureConstants, folderSuccessConstants } from '../../../constants'

const initialState = {
    folders: {},
    rootIds: [],
    error: "",
    isLoading: false
}
const reducer = (state: any = initialState, action: folderActions) => {
    switch (action.type) {
        case folderSuccessConstants.CREATE:
            return { error: "", ...action.payload };

        case folderFailureConstants.CREATE:
            return { ...state, error: "failed to create folder" };

        case folderSuccessConstants.DELETE:
            return { error: "", ...action.payload };
        case folderFailureConstants.DELETE:
            return { ...state, error: "failed to delete folder" };

        case folderConstants.READ:
            return { ...state, isLoading: true }
        case folderSuccessConstants.READ:
            return { error: "", ...action.payload, isLoading: false };
        case folderFailureConstants.READ:
            return { ...state, error: "failed to read folders", isLoading: false };

        case folderConstants.READ_CHILDREN:
            return { ...state, isLoadingChildren: true, parentId: action.payload }

        case folderSuccessConstants.READ_CHILDREN:
            const UpdatedFolders = { ...state.folders, ...action.payload.childFolders }
            UpdatedFolders[action.payload.parentId] = {
                ...UpdatedFolders[action.payload.parentId],
                childrenIds: action.payload.childFolderIds
            }
            return { ...state, isLoadingChildren: false, folders: UpdatedFolders };

        case folderFailureConstants.READ_CHILDREN:
            return { ...state, error: "failed to read folder children", isLoadingChildren: false };

        case folderSuccessConstants.UPDATE:
            return { error: "", folders: action.payload };
        case folderFailureConstants.UPDATE:
            return { ...state, error: "failed to update folders" };

        default:
            return { ...state, error: null };
    }
}

export default reducer;