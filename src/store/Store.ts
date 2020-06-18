/* eslint-disable no-underscore-dangle */
import {
  applyMiddleware, combineReducers, compose, createStore
} from 'redux';
import createSagaMiddleware from 'redux-saga';
import thunk from 'redux-thunk';
import { loginReducer } from './reducers';
// eslint-disable-next-line no-underscore-dangle
import watchLogin from './saga';

const sagaMiddleware = createSagaMiddleware();

export const rootReducer = combineReducers({
  loginState: loginReducer
});

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk, sagaMiddleware))
);

sagaMiddleware.run(watchLogin);
