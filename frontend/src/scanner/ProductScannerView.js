import React, {useState} from 'react';
import Scanner from "./Scanner";
import {useSelector} from "react-redux";

function ProductScannerView() {
    const product = useSelector(state => state.productScanner);
    const [start, setStart] = useState(false);
    return (
        <>
            {product}
            {!start ?
                <button onClick={() => setStart(true)}>Start scanning</button> :
                <Scanner/>
            }
        </>)
}

export default ProductScannerView