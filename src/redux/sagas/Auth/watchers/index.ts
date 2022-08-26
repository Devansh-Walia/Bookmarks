import { all, takeLatest, fork } from 'redux-saga/effects';

import { authConstants } from '../../../../constants';

import {
  GET_MEWatcherFunction,
  LoginWatcherFunction,
  logoutWatcherFunction,
  signinWatcherFunction
} from '../functions';

function* LoginWatcher() {
  yield takeLatest(authConstants.LOGIN, LoginWatcherFunction);
}

function* logoutWatcher() {
  yield takeLatest(authConstants.LOGOUT, logoutWatcherFunction);
}

function* signinWatcher() {
  yield takeLatest(authConstants.SIGNUP, signinWatcherFunction);
}
function* GET_MEWatcher() {
  yield takeLatest(authConstants.GET_ME, GET_MEWatcherFunction);
}

export default function* authSagas() {
  yield all([
    fork(logoutWatcher),
    fork(LoginWatcher),
    fork(signinWatcher),
    fork(GET_MEWatcher)
  ]);
}
