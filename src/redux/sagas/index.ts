import { all, fork } from 'redux-saga/effects';
import authSagas from './Auth/watchers';
import bookmarkSagas from './Bookmark/watchers';
import folderSagas from './Folder/watchers';

export default function* rootSaga() {
  yield all([fork(authSagas), fork(folderSagas), fork(bookmarkSagas)]);
}
