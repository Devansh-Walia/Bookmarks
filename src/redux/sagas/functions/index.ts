import { authFaliureConstants, authSucessConstants } from '../../../constants';
import { call, put } from 'redux-saga/effects'
import { addDataToLocalStorage, logInRequest, logoutRequest, signInRequest } from '../../../services';


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

export function* logoutWatcherFunction(action: any): Generator<any> {
    yield call(logoutRequest);
    yield put({ type: authSucessConstants.LOGOUT });
}

export function* signinWatcherFunction(action: any): Generator<any> {
    try {
        console.log("in signin watcher", action)
        const response: any = yield call(signInRequest, { userName: action.payload.userName, email: action.payload.email, password: action.payload.password });
        addDataToLocalStorage({ key: "@Canlogin", value: response.data.token });

        yield put({ type: authSucessConstants.LOGIN });
    }
    catch (e) {
        yield put({ type: authFaliureConstants.LOGIN })
    }
}
export function* getmeWatcherFunction(action: any): Generator<any> {

    yield put({ type: authSucessConstants.GETME });
} 