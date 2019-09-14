import React from 'react';

function ProductListElement(product) {

    return (
        < div>
            {
                product.ean
            }
        </div>
    )
}

export default ProductListElement