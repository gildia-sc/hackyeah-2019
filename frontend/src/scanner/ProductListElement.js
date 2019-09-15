import React from 'react';
import {withRouter} from 'react-router-dom'
import Grid from "@material-ui/core/Grid";
import {Link} from "react-router-dom";
import {productDetected} from "./ScannerReducer";
import {useDispatch} from "react-redux";
import Button from "@material-ui/core/Button";

function ProductListElement({history, product, betterProduct}) {
    const dispatch = useDispatch();
    return product.found ? (
        <Grid container spacing={3}>
            <Grid item xs={2}>
                {product.ean}
            </Grid>
            <Grid item xs={3}>
                {product.name}
            </Grid>
            <Grid item xs={3}>
                {betterProduct && (
                    <Button variant="contained" color="primary" onClick={() => history.push("/product/" + betterProduct.ean)}>
                        Better
                    </Button>
                )}
            </Grid>
            <Grid item xs={1}>
                {product.score}
            </Grid>
            <Grid item xs={3}>
                <Button variant="contained" color="primary" onClick={() => history.push("/product/" + product.ean)}>
                    Show details
                </Button>
            </Grid>
        </Grid>
    ) : (
        <Grid container spacing={3}>
            <Grid item xs={2}>
                {product.ean}
            </Grid>
            <Grid item xs={3}>
                (product not found)
            </Grid>
            <Grid item xs={3}>

            </Grid>
            <Grid item xs={1}>
                -
            </Grid>
            <Grid item xs={3}>
                <Button variant="contained" color="secondary" onClick={() => history.push("/send-new-product/" + product.ean)}>
                    Send product
                </Button>
            </Grid>
        </Grid>
    )

}

export default withRouter(ProductListElement)