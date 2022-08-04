import { folderConstants } from '../../../../constants';

import { all, takeLatest, fork } from 'redux-saga/effects'
import { CreateFolderWatcherFunction, DeleteFolderWatcherFunction, GetFolderWatcherFunction, RenameFolderWatcherFunction } from '../functions';

function* CreateFolderWatcher() {
    yield takeLatest(folderConstants.CREATE, CreateFolderWatcherFunction)
}
function* DeleteFolderWatcher() {
    yield takeLatest(folderConstants.DELETE, DeleteFolderWatcherFunction)
}
function* RenameFolderWatcher() {
    yield takeLatest(folderConstants.UPDATE, RenameFolderWatcherFunction)
}
function* GetFolderWatcher() {
    yield takeLatest(folderConstants.READ, GetFolderWatcherFunction)
}

export default function* folderSagas() {
    yield all([fork(CreateFolderWatcher),
    fork(DeleteFolderWatcher), fork(GetFolderWatcher), fork(RenameFolderWatcher)]);
}

