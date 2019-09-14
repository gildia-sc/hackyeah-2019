import {fetchProduct} from "../product/ProductsReducer";
import {put, throttle} from 'redux-saga/effects'


function* onProductDetected(action) {
    yield put(fetchProduct(action.ean))
}

export function* scannerSaga() {
    yield throttle(1000, 'PRODUCT_DETECTED', onProductDetected);
}