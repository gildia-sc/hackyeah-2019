import ProductApi, {NotFoundException} from "./ProductApi";
import {fetchProductFailure, fetchProductSuccess, productNotFound} from "./ProductsReducer";
import {call, put, takeLatest, select} from 'redux-saga/effects'

function* onProductFetch(action) {
    try {
        const product = yield call(ProductApi.get, action.ean);
        const coords = yield select(state => state.gpsReducer.coords)
        console.log(coords)
        yield put(fetchProductSuccess(product));
    } catch (error) {
        if(error instanceof NotFoundException) {
            yield put(productNotFound(action.ean));
        }
        yield put(fetchProductFailure(error));
    }
}

export function* productSaga() {
    yield takeLatest('FETCH_PRODUCT', onProductFetch);
}