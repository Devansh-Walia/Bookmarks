import { all, fork } from 'redux-saga/effects';
import authSagas from './sagas/watchers';


export default function* rootSaga() {
    yield all([fork(authSagas)]);
}

export * from './store'
export * from './action-creators'
export * from './hooks'
