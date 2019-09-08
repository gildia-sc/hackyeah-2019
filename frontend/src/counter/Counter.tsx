import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {incrementRequest} from "./IncrementCounterReducer";
import {decrementRequest} from "./DecrementCounterReducer";
import {getCounterRequest} from "./GetCounterReducer";

const Counter: React.FC = () => {

    const value = useSelector((state: any) => state.counter.data);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getCounterRequest())
    }, []);

    return <>
        {value}
        <button onClick={() => dispatch(incrementRequest())}>plus</button>
        <button onClick={() => dispatch(decrementRequest())}>minus</button>
    </>;
}
export default Counter;