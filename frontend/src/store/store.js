import {applyMiddleware, combineReducers, createStore} from "redux";
import ScannerReducer from "../scanner/ScannerReducer";
import {composeWithDevTools} from 'redux-devtools-extension';

export default createStore(combineReducers({ScannerReducer}), composeWithDevTools(applyMiddleware()));