import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from 'redux-saga';
import rootSaga from ".";
import reducer from './reducers/index'
import logger from 'redux-logger'

const saga = createSagaMiddleware()


export const store = createStore(
    reducer,
    applyMiddleware(saga, logger),
);
saga.run(rootSaga);