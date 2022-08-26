import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';

import reducer from './reducers/index';
import rootSaga from './sagas';

const saga = createSagaMiddleware();

export const store = createStore(reducer, applyMiddleware(saga, logger));

saga.run(rootSaga);
