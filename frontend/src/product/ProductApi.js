async function get(ean) {
    const data = await fetch(`http://ec2-18-220-161-116.us-east-2.compute.amazonaws.com:8080/products/search/findProductByEan?ean=${ean}&projection=ProductProjection`)
    if (data.status === 404) {
         throw new NotFoundException()
    }
    return data.json()
}

export default ({get});

export class NotFoundException extends Error {}
