import { createStore, applyMiddleware } from 'redux'; 
import logger from 'redux-logger';
import rootReducer from './root.reducer';
import { persistStore } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';
import { fetchCollectionStart } from './shop/shop.sagas';

const sagaMiddleware = createSagaMiddleware()

const middlewares = [logger, sagaMiddleware];

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

sagaMiddleware.run(fetchCollectionStart);

export const persistor = persistStore(store);

