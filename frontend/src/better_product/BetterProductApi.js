const URL = 'https://e6bb9d70.ngrok.io/products/search/findTopByCategoryNameAndScoreGreaterThanOrderByScoreDesc'

async function get(category, score) {
    const data = await fetch(`${URL}?categoryName=${category}&score=${score}&projection=ProductProjection`)
    return data.json()
}

export default ({get});

