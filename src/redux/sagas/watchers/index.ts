import { authConstants } from '../../../constants';

import { all, takeLatest, fork } from 'redux-saga/effects'
import { getmeWatcherFunction, LoginWatcherFunction, logoutWatcherFunction, signinWatcherFunction } from '../functions';

function* LoginWatcher() {
    yield takeLatest(authConstants.LOGIN, LoginWatcherFunction)
}

function* logoutWatcher() {
    yield takeLatest(authConstants.LOGOUT, logoutWatcherFunction)
}

function* signinWatcher() {
    yield takeLatest(authConstants.SIGNIN, signinWatcherFunction)
}
function* getmeWatcher() {
    yield takeLatest(authConstants.GETME, getmeWatcherFunction)
}


export default function* authSagas() {
    yield all([fork(logoutWatcher), fork(LoginWatcher), fork(signinWatcher), fork(getmeWatcher)]);
}

