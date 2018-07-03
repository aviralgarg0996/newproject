
import { Reducer }   from "../reducers/Reducer";
import {createStore,applyMiddleware} from 'redux'   
import logger from 'redux-logger';
import {watcherSaga} from "../sagas/WatcherSaga"

import createSagaMiddleware from "redux-saga";

//create saga middleware
const sagaMiddleware = createSagaMiddleware();

const store=createStore(Reducer,applyMiddleware(logger,sagaMiddleware)); 
export default store;
sagaMiddleware.run(watcherSaga);
