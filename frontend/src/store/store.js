import {applyMiddleware, combineReducers, createStore} from "redux";
import productScanner from "../scanner/ScannerReducer";
import products from "../product/ProductsReducer";
import {composeWithDevTools} from 'redux-devtools-extension';
import {productSaga} from "../product/ProductSaga";
import {scannerSaga} from "../scanner/ScannerSaga";
import {all} from 'redux-saga/effects'
import createSagaMiddleware from 'redux-saga'
import {gpsSaga} from "../gps/GpsSaga"
import gpsReducer from "../gps/GpsReducer"
import betterProduct from "../better_product/BetterProductReducer"
import {betterProductSaga} from "../better_product/BetterProductSaga"

const sagaMiddleware = createSagaMiddleware();

export default createStore(combineReducers({productScanner, products, gpsReducer, betterProduct}),
    composeWithDevTools(applyMiddleware(sagaMiddleware)));


function* sagas() {
    yield all([
        productSaga(),
        scannerSaga(),
        gpsSaga(),
        betterProductSaga()
    ])
}

sagaMiddleware.run(sagas);