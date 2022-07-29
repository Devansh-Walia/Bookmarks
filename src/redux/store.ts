import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from 'redux-saga';
import rootSaga from ".";
import reducer from './reducers/index'


const saga = createSagaMiddleware()


export const store = createStore(
    reducer,
    applyMiddleware(saga)
);
saga.run(rootSaga);