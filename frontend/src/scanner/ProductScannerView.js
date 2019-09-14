import React from 'react';
import Scanner from "./Scanner";
import {useSelector} from "react-redux";
import ProductListElement from "./ProductListElement"
import {Link} from 'react-router-dom';
import BetterProductDialog from "../better_product/BetterProductDialog"

function ProductScannerView() {
    const products = useSelector(state => state.products.products);
    return (
        <>
            <Link to="/demo-ean-codes">Test bar codes</Link>
            <Scanner/>
            < div>
                {products.map((product, id) => <ProductListElement product={product} key={id}/>)}
            </div>
            <BetterProductDialog/>
        </>)
}

export default ProductScannerView
