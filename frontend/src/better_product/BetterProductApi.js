const URL = 'http://localhost:8080/products/search/findTopByCategoryNameAndScoreGreaterThanOrderByScoreDesc'

async function get(category, score) {
    const data = await fetch(`${URL}?categoryName=${category}&score=${score}&projection=ProductProjection`)
    return data.json()
}

export default ({get});
