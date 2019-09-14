function get(ean) {
    return fetch(`http://localhost:8080/products/search/findProductByEan?ean=${ean}&projection=ProductProjection`)
        .then(data => data.json())
}

export default ({get});