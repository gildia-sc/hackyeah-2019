import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {decrement, increment} from "./CounterReducer";

const Counter: React.FC = () => {
    const value = useSelector((state: any) => state.counter);
    const dispatch = useDispatch();

    return <>
        {value}
        <button onClick={() => dispatch(increment())}>plus</button>
        <button onClick={() => dispatch(decrement())}>minus</button>
    </>;
}
export default Counter;