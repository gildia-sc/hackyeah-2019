import {call, put, select, takeLatest} from 'redux-saga/effects'
import BetterProductApi from "../better_product/BetterProductApi"
import {fetchBetterProductFailure, fetchBetterProductSuccess} from "./BetterProductReducer"

function* onBetterProductFetch(action) {
    try {
        const product = yield call(BetterProductApi.get, action.query.category.name, action.query.score);
        yield put(fetchBetterProductSuccess(product));
    } catch (error) {
        yield put(fetchBetterProductFailure(error));
    }
}

export function* betterProductSaga() {
    yield takeLatest('FETCH_BETTER_PRODUCT', onBetterProductFetch);
}