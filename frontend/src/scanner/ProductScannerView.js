import React from 'react';
import Scanner from "./Scanner";
import {useSelector} from "react-redux";
import ProductListElement from "./ProductListElement"

function ProductScannerView() {
    const products = useSelector(state => state.products.products);
    const betterProducts = useSelector(state => state.products.betterProducts);

    return (
        <>
            <Scanner/>
            <div>
                {products.map((product, id) => <ProductListElement product={product} key={id} betterProduct={betterProducts[product.ean]} />)}
            </div>
        </>)
}

export default ProductScannerView
