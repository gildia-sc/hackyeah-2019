import React from 'react';
import Grid from "@material-ui/core/Grid";
import {Link} from "react-router-dom";
import {productDetected} from "./ScannerReducer";
import {useDispatch} from "react-redux";

function ProductListElement({product}) {
    console.log(product);
    const dispatch = useDispatch();
    return (
        <div>
            <Grid item>
                <Link to={"/product/" + product.ean} onClick={() => dispatch(productDetected(product.ean))}>
                    <img src={"/demo-ean-codes/test_barcode_" + product.ean + "_300x169.jpg"}
                         alt={"Click to select '" + product.name + "'"}/>
                </Link>
            </Grid>

            {
                product.name
            }
        </div>
    )
}

export default ProductListElement