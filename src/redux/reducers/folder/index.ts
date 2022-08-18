import { folderActions } from "../../actions";
import { folderConstants, folderFailureConstants, folderSuccessConstants } from '../../../constants'

interface FolderType {
    id?: string
}

const initialState = {
    folders: [],
    error: "",
    isLoading: false
}
const reducer = (state: any = initialState, action: folderActions) => {
    switch (action.type) {
        case folderSuccessConstants.CREATE:
            return { error: "", folders: action.payload };

        case folderFailureConstants.CREATE:
            return { ...state, error: "failed to create folder" };

        case folderSuccessConstants.DELETE:
            return { error: "", folders: action.payload };
        case folderFailureConstants.DELETE:
            return { ...state, error: "failed to delete folder" };

        case folderConstants.READ:
            return { ...state, isLoading: true }
        case folderSuccessConstants.READ:
            return { error: "", folders: action.payload, isLoading: false };
        case folderFailureConstants.READ:
            return { ...state, error: "failed to read folders", isLoading: false };

        case folderConstants.READ_CHILDREN:
            return { ...state, isLoadingChildren: true, parentId: action.payload }
        case folderSuccessConstants.READ_CHILDREN:
            const UpdatedFolders = state.folders.map((item: FolderType) =>
                item.id === state.parentId ? { ...item, children: action.payload } : item)
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