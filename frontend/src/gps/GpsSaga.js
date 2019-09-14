import {call, put} from 'redux-saga/effects'
import gps from "./gps"
import {gpsSuccess} from "./GpsReducer"

function* getLocation() {
    const coords = yield call(gps);
    yield put(gpsSuccess({latitude: coords.latitude, longitude: coords.longitude}));
}

export function* gpsSaga() {
    yield getLocation();
}