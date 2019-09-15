async function get(ean) {
    const data = await fetch(`http://localhost:8080/products/search/findProductByEan?ean=${ean}&projection=ProductProjection`)
    return data.json()
}

export default ({get});

