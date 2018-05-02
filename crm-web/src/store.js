import { createStore, applyMiddleware, combineReducers } from 'redux';
import loginReducer from './reducers/loginReducer';
import createSagaMiddleware from 'redux-saga';
import { routerMiddleware } from 'react-router-redux'
import login from './sagas/login';
import createHistory from 'history/createBrowserHistory'

const sagaMiddleware = createSagaMiddleware();
const history = createHistory();
const rootReducer = {login: loginReducer};
const middlewares = applyMiddleware(sagaMiddleware,routerMiddleware(history));
const store = createStore(combineReducers(rootReducer),middlewares);

sagaMiddleware.run(login);
export default store;