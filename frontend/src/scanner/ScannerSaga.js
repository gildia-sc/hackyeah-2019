import {fetchProduct} from "../product/ProductReducer";
import {put, takeEvery} from 'redux-saga/effects'


function* onProductDetected(action) {
    yield put(fetchProduct(action.ean))
}

export function* scannerSaga() {
    yield takeEvery('PRODUCT_DETECTED', onProductDetected);
}