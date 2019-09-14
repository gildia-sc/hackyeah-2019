import {useDispatch, useSelector} from "react-redux"
import React, {useEffect} from "react"
import {fetchProduct} from "./ProductsReducer"

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
            { product  && product.ean}
        </>)
}

export default ProductDetailsView