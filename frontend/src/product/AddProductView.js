function get(ean) {
    //https://ec2-18-220-161-116.us-east-2.compute.amazonaws.com/api...
    return fetch(`api/products/search/findProductByEan?ean=${ean}&projection=ProductProjection`)
        .then(data => data.json())
}

export default ({get});