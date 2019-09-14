import {applyMiddleware, combineReducers, createStore} from "redux";
import productScanner from "../scanner/ScannerReducer";
import productReducer from "../product/ProductReducer";
import {composeWithDevTools} from 'redux-devtools-extension';
import {productSaga} from "../product/ProductSaga";
import {scannerSaga} from "../scanner/ScannerSaga";
import {all} from 'redux-saga/effects'
import createSagaMiddleware from 'redux-saga'

const sagaMiddleware = createSagaMiddleware();

export default createStore(combineReducers({productScanner, productReducer}),
    composeWithDevTools(applyMiddleware(sagaMiddleware)));


function* sagas() {
    yield all([
        productSaga(),
        scannerSaga()
    ])
}

sagaMiddleware.run(sagas);