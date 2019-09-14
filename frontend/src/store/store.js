import {applyMiddleware, combineReducers, createStore} from "redux";
import productScanner from "../scanner/ScannerReducer";
import products from "../product/ProductsReducer";
import {composeWithDevTools} from 'redux-devtools-extension';
import {productSaga} from "../product/ProductSaga";
import {scannerSaga} from "../scanner/ScannerSaga";
import {all} from 'redux-saga/effects'
import createSagaMiddleware from 'redux-saga'

const sagaMiddleware = createSagaMiddleware();

export default createStore(combineReducers({productScanner, products}),
    composeWithDevTools(applyMiddleware(sagaMiddleware)));


function* sagas() {
    yield all([
        productSaga(),
        scannerSaga()
    ])
}

sagaMiddleware.run(sagas);