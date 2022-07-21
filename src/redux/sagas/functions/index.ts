import { authConstants } from '../../../constants';
import { put } from 'redux-saga/effects'
export function* LoginWatcherFunction() {

    yield put({ type: authConstants.LOGIN_REDUX });
}

export function* logoutWatcherFunction() {

    yield put({ type: authConstants.LOGOUT_REDUX });
}

export function* signinWatcherFunction() {

    yield put({ type: authConstants.SIGNIN_REDUX });
}
export function* getmeWatcherFunction() {

    yield put({ type: authConstants.GETME_REDUX });
} 