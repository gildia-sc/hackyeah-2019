import React, {useState} from 'react';
import Scanner from "./Scanner";
import {useSelector} from "react-redux";
import ProductListElement from "./ProductListElement"

function ProductScannerView() {
    const products = useSelector(state => state.products.products);
    return (
        <>
            <Scanner/>
            xddd
            < div>
                {products.map((product, id) => <ProductListElement product={product} key={product.ean}/>)}
            </div>
        </>)
}

export default ProductScannerView