import {createStore, applyMiddleware} from "redux";
import createSagaMiddleware from "redux-saga";
import {rootReducer} from "./reducers.js";

import watchAllSaga from "./sagawatcher.js";

//saga middleware 
const sagaMiddleware = createSagaMiddleware();

//create store and apply saga middleware
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

// run saga watcher
sagaMiddleware.run (watchAllSaga);

export default store;