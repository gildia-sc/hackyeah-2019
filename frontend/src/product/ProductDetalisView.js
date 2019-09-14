import {useDispatch, useSelector} from "react-redux"
import React, {useEffect} from "react"
import {fetchProduct} from "./ProductsReducer"

import Grid from '@material-ui/core/Grid';

function ProductDetailsView({history, match}) {
    const ean = match.params.ean
    const dispatch = useDispatch();
    const products = useSelector(state => state.products.products);
    const product = products.find(p => p.ean === ean);
    useEffect(() => {
        product || dispatch(fetchProduct(ean))
    }, [ean])
    return (
        <>
            { product && (
                <Grid container spacing={3}>
                    <Grid item xs={6}>Product name:</Grid>
                    <Grid item xs={6}>{product.name}</Grid>
                    <Grid item xs={6}>Company:</Grid>
                    <Grid item xs={6}>{product.company.name}</Grid>
                    <Grid item xs={6}>Scoring:</Grid>
                    <Grid item xs={6}>???</Grid>
                    <Grid item xs={6}>Category:</Grid>
                    <Grid item xs={6}>
                        TODO {/*{product.category.name}*/}
                    </Grid>
                    <Grid item xs={6}>Generated waste:</Grid>
                    <Grid item xs={6}>TODO: {product.productWeight} + {product.packageWeight} / {product.productWeight}</Grid>
                    <Grid item xs={6}>Shipping distance:</Grid>
                    <Grid item xs={6}>TODO: {product.latitude} / {product.longitude}</Grid>
                    <Grid item xs={6}>Weight with packaging:</Grid>
                    <Grid item xs={6}>{product.productWeight} + {product.packageWeight}</Grid>
                    <Grid item xs={6}>Package material type:</Grid>
                    <Grid item xs={6}>
                        {product.packageMaterial.code}
                    </Grid>
                    <Grid item xs={6}>Package material recycling percent:</Grid>
                    <Grid item xs={6}>
                        {product.packageMaterial.recyclePotential}</Grid>
                    <Grid item xs={6}>Package biodegradate time:</Grid>
                    <Grid item xs={6}>
                        {product.packageMaterial.timeToBiodegradateInDays} (days)}
                    </Grid>
                </Grid>
            )}
        </>)
}

export default ProductDetailsView

