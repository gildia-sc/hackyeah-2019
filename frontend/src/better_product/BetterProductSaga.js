import {call, put, takeLatest} from 'redux-saga/effects'
import BetterProductApi from "../better_product/BetterProductApi"
import {fetchBetterProductFailure, fetchBetterProductSuccess} from "./BetterProductReducer"

function* onBetterProductFetch(action) {
    try {
        const product = yield call(BetterProductApi.get, action.query.category.name, action.query.score);
        yield put(fetchBetterProductSuccess(action.query.ean, product));
    } catch (error) {
        yield put(fetchBetterProductFailure(error));
    }
}

export function* betterProductSaga() {
    yield takeLatest('FETCH_BETTER_PRODUCT', onBetterProductFetch);
}