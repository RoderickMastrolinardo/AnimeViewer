import {applyMiddleware, compose, createStore} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
import promise from 'redux-promise';
import thunk from 'redux-thunk';
import Reducers from '../store/reducers/Root';
import logger from 'redux-logger';

const persistConfig = {
  key: 'primary',
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, Reducers);

const configureStore = () => {
  return createStore(
    persistedReducer,
    compose(applyMiddleware(thunk, promise, logger)),
  );
};
const store = configureStore();
const persist = persistStore(store);

export {store, persist};
