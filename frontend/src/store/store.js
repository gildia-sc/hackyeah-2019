import {applyMiddleware, combineReducers, createStore} from "redux";
import productScanner from "../scanner/ScannerReducer";
import {composeWithDevTools} from 'redux-devtools-extension';

export default createStore(combineReducers({productScanner}), composeWithDevTools(applyMiddleware()));