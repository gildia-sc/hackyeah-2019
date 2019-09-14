import React from 'react';

function ProductListElement({product}) {
    console.log(product)
    return (
        < div>
            {
                product.ean
            }
        </div>
    )
}

export default ProductListElement