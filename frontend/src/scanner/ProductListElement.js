import React from 'react';
import Grid from "@material-ui/core/Grid";
import {Link} from "react-router-dom";
import {productDetected} from "./ScannerReducer";
import {useDispatch} from "react-redux";

function ProductListElement({product}) {
    const dispatch = useDispatch();
    return product.found ? (
        <Grid item>
            <Link to={"/product/" + product.ean} onClick={() => dispatch(productDetected(product.ean))}>
                {product.name}
            </Link>
        </Grid>
    ) : (
        <Grid item>
            {product.ean}  not found
            <Link to={"/send-new-product/" + product.ean} >
            Add new product
            </Link>
        </Grid>
    )

}

export default ProductListElement