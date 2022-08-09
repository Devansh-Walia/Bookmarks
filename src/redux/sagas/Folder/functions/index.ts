import { folderFaliureConstants, folderSucessConstants } from '../../../../constants';
import { call, put } from 'redux-saga/effects'
import { createFolder, DeleteFolder, getFolder, renameFolder } from '../../../../services';


export function* CreateFolderWatcherFunction(action: any): Generator<any> {
    try {
        console.log(action)
        const response: any = yield call(createFolder, { name: action.payload.name, parentId: action.payload.parentId });
        console.log(response);

        yield put({ type: folderSucessConstants.CREATE });
    }
    catch (e) {
        yield put({ type: folderFaliureConstants.CREATE })
    }
}
export function* DeleteFolderWatcherFunction(action: any): Generator<any> {
    try {
        console.log(action)
        const response: any = yield call(DeleteFolder, { folderId: action.payload.folderId });
        console.log(response);

        yield put({ type: folderSucessConstants.DELETE });
    }
    catch (e) {
        yield put({ type: folderFaliureConstants.DELETE })
    }
}
export function* GetFolderWatcherFunction(action: any): Generator<any> {
    try {
        const response: any = yield call(getFolder, { folderId: action.payload.folderId });
        yield put({ type: folderSucessConstants.READ, payload: response.data });
    }
    catch (e) {
        yield put({ type: folderFaliureConstants.READ, payload: e })
    }
}
export function* RenameFolderWatcherFunction(action: any): Generator<any> {
    try {
        console.log(action)
        const response: any = yield call(renameFolder, { folderId: action.payload.folderId, name: action.payload.name });
        console.log(response);

        yield put({ type: folderSucessConstants.UPDATE });
    }
    catch (e) {
        yield put({ type: folderFaliureConstants.UPDATE })
    }
}

