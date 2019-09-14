import {fetchProduct} from "../product/ProductReducer";
import {put, takeEvery} from 'redux-saga/effects'


function* onProductDetected() {
    yield put(fetchProduct())
}

export function* scannerSaga() {
    yield takeEvery('PRODUCT_DETECTED', onProductDetected);
}