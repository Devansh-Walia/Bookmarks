import { all, fork } from 'redux-saga/effects';
import authSagas from './sagas/Auth/watchers';
import folderSagas from './sagas/Folder/watchers';
import bookmarkSagas from './sagas/Bookmark/watchers';

export default function* rootSaga() {
    yield all([fork(authSagas), fork(folderSagas), fork(bookmarkSagas)]);
}

export * from './store'
export * from './action-creators'
export * from './hooks'
