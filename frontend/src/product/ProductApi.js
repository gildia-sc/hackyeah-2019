async function get(ean) {
    //https://ec2-18-220-161-116.us-east-2.compute.amazonaws.com/api...
    const data = await fetch(`api/products/search/findProductByEan?ean=${ean}&projection=ProductProjection`)
    if (data.status === 404) {
         throw new NotFoundException()
    }
    return data.json()
}

export default ({get});

export class NotFoundException extends Error {}
