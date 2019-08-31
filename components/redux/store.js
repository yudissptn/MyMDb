import { createStore, applyMiddleware, combineReducers } from "redux";
import movieReducers from './reducer'
import createSagaMiddleware from "redux-saga";
import rootSaga from "./saga/rootSaga"

const sagaMiddleware = createSagaMiddleware();

const store = createStore(movieReducers, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export default store