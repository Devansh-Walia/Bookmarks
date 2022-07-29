import { authFaliureConstants, authSucessConstants } from '../../../constants';
import { call, put } from 'redux-saga/effects'
import { addDataToLocalStorage, logInRequest } from '../../../services';


export function* LoginWatcherFunction(action: any): Generator<any> {
    try {
        console.log("in login watcher", action)
        const response: any = yield call(logInRequest, { email: action.payload.email, password: action.payload.password });
        addDataToLocalStorage({ key: "@authToken", value: response.data.token });

        yield put({ type: authSucessConstants.LOGIN });
    }
    catch (e) {
        yield put({ type: authFaliureConstants.LOGIN })
    }
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