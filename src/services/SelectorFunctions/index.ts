import { IRootState } from "../../redux/reducers";

export const stateSelector = (state: IRootState) => state
export const authSelector = (state: IRootState) => state.auth
export const bookmarkSelector = (state: IRootState) => state.bookmark
export const folderSelector = (state: IRootState) => state.folder


