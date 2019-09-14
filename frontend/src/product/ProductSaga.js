import ProductApi from "./ProductApi";
import {fetchProductFailure, fetchProductSuccess} from "./ProductReducer";
import {call, put, takeEvery} from 'redux-saga/effects'

function* onProductFetch() {
    try {
        const product = yield call(ProductApi.get());
        yield put(fetchProductSuccess(product));
    } catch (error) {
        yield put(fetchProductFailure(error));
    }
}

export function* productSaga() {
    yield takeEvery('FETCH_PRODUCT', onProductFetch);
}