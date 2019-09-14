import {useDispatch, useSelector} from "react-redux"
import React, {useEffect, useState} from "react"
import {fetchProduct} from "./ProductReducer"

function ProductDetailsView({history, match}) {
    const ecs = match.params.ecs
    const dispatch = useDispatch();
    const product = useSelector(state => state.productScanner);

    useEffect(() => {dispatch(fetchProduct(ecs))})
    return (
        <>
            {product}
        </>)
}

export default ProductDetailsView