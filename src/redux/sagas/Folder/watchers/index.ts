import { all, takeLatest, fork, takeEvery } from 'redux-saga/effects';

import { folderConstants } from '../../../../constants';
import {
  CreateFolderWatcherFunction,
  DeleteFolderWatcherFunction,
  GetChildrenWatcherFunction,
  GetFolderWatcherFunction,
  RenameFolderWatcherFunction
} from '../functions';

function* CreateFolderWatcher() {
  yield takeLatest(folderConstants.CREATE, CreateFolderWatcherFunction);
}
function* DeleteFolderWatcher() {
  yield takeLatest(folderConstants.DELETE, DeleteFolderWatcherFunction);
}
function* RenameFolderWatcher() {
  yield takeLatest(folderConstants.UPDATE, RenameFolderWatcherFunction);
}
function* GetFolderWatcher() {
  yield takeLatest(folderConstants.READ, GetFolderWatcherFunction);
}
function* GetChildrenWatcher() {
  yield takeEvery(folderConstants.READ_CHILDREN, GetChildrenWatcherFunction);
}

export default function* folderSagas() {
  yield all([
    fork(CreateFolderWatcher),
    fork(DeleteFolderWatcher),
    fork(GetFolderWatcher),
    fork(GetChildrenWatcher),
    fork(RenameFolderWatcher)
  ]);
}
