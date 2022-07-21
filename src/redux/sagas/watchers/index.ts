import { authSagaConstants } from '../../../constants';

import { takeLatest } from 'redux-saga/effects'
import { getmeWatcherFunction, LoginWatcherFunction, logoutWatcherFunction, signinWatcherFunction } from '../functions';

export function* LoginWatcher() {
    yield takeLatest(authSagaConstants.LOGIN_SAGA, LoginWatcherFunction)
}

export function* logoutWatcher() {
    yield takeLatest(authSagaConstants.LOGOUT_SAGA, logoutWatcherFunction)
}

export function* signinWatcher() {
    yield takeLatest(authSagaConstants.SIGNIN_SAGA, signinWatcherFunction)
}
export function* getmeWatcher() {
    yield takeLatest(authSagaConstants.GETME_SAGA, getmeWatcherFunction)
} 