import {call, put, takeEvery} from 'redux-saga/effects'
import {decrement, getCount, increment} from "./CounterContract";
import {incrementFailure, incrementSuccess} from "./IncrementCounterReducer";
import {getCounterFailure, getCounterRequest, getCounterSuccess} from "./GetCounterReducer";
import {decrementFailure, decrementSuccess} from "./DecrementCounterReducer";

function* onIncrement() {
    try {
        yield call(increment)
        yield put(incrementSuccess())
        yield put(getCounterRequest())
    } catch (error) {
        yield put(incrementFailure(error.message))
    }
}

function* onDecrement() {
    try {
         yield call(decrement)
        yield put(decrementSuccess())
        yield put(getCounterRequest())
    } catch (error) {
        yield put(decrementFailure(error.message))
    }
}

function* onGet() {
    try {
        const data: string = yield call(getCount)
        yield put(getCounterSuccess(data))
    } catch (error) {
        yield put(getCounterFailure(error.message))
    }
}

export function* counterSaga() {
    yield takeEvery('INCREMENT_REQUEST', onIncrement);
    yield takeEvery('DECREMENT_REQUEST', onDecrement);
    yield takeEvery('GET_COUNTER_REQUEST', onGet);
}