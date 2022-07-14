import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from 'redux-saga';

import reducer from './reducers/index'

// sagas
// import { authWatcher } from "./sagas/saga";

const saga = createSagaMiddleware()


export const store = createStore(
    reducer,
    applyMiddleware(saga)
);
// saga.run(authWatcher);