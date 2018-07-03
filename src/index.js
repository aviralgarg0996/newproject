// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { watcherSaga } from "./sagas/WatcherSaga";
import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import { Reducer } from "./reducers/Reducer";
import { Provider } from "react-redux";

const sagaMiddleware = createSagaMiddleware();

let store = createStore(
    Reducer,
    compose(applyMiddleware(sagaMiddleware))
  );

  sagaMiddleware.run(watcherSaga);

ReactDOM.render(
<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
