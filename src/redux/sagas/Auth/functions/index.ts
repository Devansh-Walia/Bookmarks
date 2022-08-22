import { authConstants, authFailureConstants, authSuccessConstants } from '../../../../constants';
import { call, put } from 'redux-saga/effects'
import { addDataToLocalStorage, getmeRequest, logInRequest, logoutRequest, signInRequest } from '../../../../services';


export function* LoginWatcherFunction(action: {
    type: authConstants.LOGIN,
    payload: { email: string, password: string, navigate: any }
}): Generator<any> {
    try {
        const response: any = yield call(logInRequest, { email: action.payload.email, password: action.payload.password });
        addDataToLocalStorage({ key: "@authToken", value: response.data.token });

        action.payload.navigate('/dash')

        yield put({ type: authSuccessConstants.LOGIN });
    }
    catch (e) {
        yield put({ type: authFailureConstants.LOGIN })
    }
}

export function* logoutWatcherFunction(action: any): Generator<any> {
    yield call(logoutRequest);
    yield put({ type: authSuccessConstants.LOGOUT });
}

export function* signinWatcherFunction(action: any): Generator<any> {
    try {
        yield call(signInRequest, { userName: action.payload.userName, email: action.payload.email, password: action.payload.password });
        addDataToLocalStorage({ key: "@Canlogin", value: true });

        yield put({ type: authSuccessConstants.LOGIN });
    }
    catch (e) {
        yield put({ type: authFailureConstants.LOGIN })
    }
}
export function* getmeWatcherFunction(action: any): Generator<any> {
    const response: any = yield call(getmeRequest);
    yield put({ type: authSuccessConstants.GETME, payload: response.data });
} 