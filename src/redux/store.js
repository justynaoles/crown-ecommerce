import { createStore, applyMiddleware } from 'redux'; 
import logger from 'redux-logger';
import rootReducer from './root.reducer';
import { persistStore } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './root.sagas';

const sagaMiddleware = createSagaMiddleware()

const middlewares = [logger, sagaMiddleware];

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);

