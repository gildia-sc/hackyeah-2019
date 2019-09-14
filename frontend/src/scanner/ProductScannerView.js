import React, {useState} from 'react';
import Scanner from "./Scanner";
import {useSelector} from "react-redux";

import Button from '@material-ui/core/Button';

function ProductScannerView() {
    const product = useSelector(state => state.productScanner);
    const [start, setStart] = useState(false);

    return (
        <>
            {product}
            {!start ?
                <Button variant="contained" color="primary" onClick={() => setStart(true)}>Start scanning</Button> :
                <Scanner/>
            }
        </>)
}

export default ProductScannerView