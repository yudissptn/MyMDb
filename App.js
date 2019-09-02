import React, { Component } from "react";
import MainScreenNavigator from './route'
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { Root } from "native-base";

import movieReducers from './components/redux/reducer'
import rootSaga from './components/redux/saga/rootSaga'


const sagaMiddleware = createSagaMiddleware();
const store = createStore(movieReducers, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga)

const App = () => {
  return (
    <Provider store={store}>
      <Root>
        <MainScreenNavigator />
      </Root>
    </Provider>
  )
}

export default App;
