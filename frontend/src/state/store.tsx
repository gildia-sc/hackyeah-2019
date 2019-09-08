import {applyMiddleware, combineReducers, createStore} from "redux";
import createSagaMiddleware from 'redux-saga'
import {counterSaga} from "../counter/CounterSaga";
import {all} from 'redux-saga/effects'
import counter from "../counter/GetCounterReducer";
import incrementCounter from "../counter/IncrementCounterReducer";
import decrementCounter from "../counter/DecrementCounterReducer";
import {composeWithDevTools} from 'redux-devtools-extension';

const wind = window as any;
const sagaMiddleware = createSagaMiddleware();

export default createStore(
    combineReducers({counter, incrementCounter, decrementCounter}),
    composeWithDevTools(
        applyMiddleware(sagaMiddleware)
    ),);


function* sagas() {
    yield all([
        counterSaga()
    ])
}

sagaMiddleware.run(sagas);