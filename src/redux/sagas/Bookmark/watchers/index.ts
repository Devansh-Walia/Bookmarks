import { all, takeLatest, fork } from 'redux-saga/effects';

import { bookmarkConstants } from '../../../../constants';
import {
  changeDetailsBookmarkWatcherFunction,
  CreateBookmarkWatcherFunction,
  DeleteBookmarkWatcherFunction,
  GetBookmarkWatcherFunction,
  patchBookmarkWatcherFunction,
  ToggleFavBookmarkWatcherFunction
} from '../functions';

function* CreateBookmarkWatcher() {
  yield takeLatest(bookmarkConstants.CREATE, CreateBookmarkWatcherFunction);
}
function* DeleteBookmarkWatcher() {
  yield takeLatest(bookmarkConstants.DELETE, DeleteBookmarkWatcherFunction);
}
function* GetBookmarkWatcher() {
  yield takeLatest(bookmarkConstants.READ, GetBookmarkWatcherFunction);
}
function* PatchBookmarkWatcher() {
  yield takeLatest(bookmarkConstants.PATCH, patchBookmarkWatcherFunction);
}
function* ToggleFavBookmarkWatcher() {
  yield takeLatest(bookmarkConstants.TOGGLE, ToggleFavBookmarkWatcherFunction);
}
function* changeDetailsBookmarkWatcher() {
  yield takeLatest(
    bookmarkConstants.CHANGE_DETAILS,
    changeDetailsBookmarkWatcherFunction
  );
}

export default function* bookmarkSagas() {
  yield all([
    fork(CreateBookmarkWatcher),
    fork(DeleteBookmarkWatcher),
    fork(GetBookmarkWatcher),
    fork(PatchBookmarkWatcher),
    fork(ToggleFavBookmarkWatcher),
    fork(changeDetailsBookmarkWatcher)
  ]);
}
