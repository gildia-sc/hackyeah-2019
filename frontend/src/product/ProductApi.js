async function get(ean) {
    const data = await fetch(`http://localhost:8080/products/search/findProductByEan?ean=${ean}&projection=ProductProjection`)
    if (data.status === 404) {
         throw new NotFoundException()
    }
    return data.json()
}

export default ({get});

export class NotFoundException extends Error {}
