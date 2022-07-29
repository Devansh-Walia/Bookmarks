import { authSucessConstants } from '../../../constants';
import { call, put } from 'redux-saga/effects'
import { addDataToLocalStorage, logInRequest } from '../../../services';
import { loginProps } from '../../actions';

export function* LoginWatcherFunction({ email, password }: loginProps) {
    console.log("in login watcher",)
    // const response = yield call(logInRequest, email, password);
    // addDataToLocalStorage({ key: "@authToken", value: response.data.token });

    yield put({ type: authSucessConstants.LOGIN });
}

export function* logoutWatcherFunction() {

    yield put({ type: authSucessConstants.LOGOUT });
}

export function* signinWatcherFunction() {

    yield put({ type: authSucessConstants.SIGNIN });
}
export function* getmeWatcherFunction() {

    yield put({ type: authSucessConstants.GETME });
} 