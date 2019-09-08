import {combineReducers, createStore} from "redux";
import counter from "../counter/CounterReducer";

export default createStore(combineReducers({counter}));