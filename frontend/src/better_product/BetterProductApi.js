//https://ec2-18-220-161-116.us-east-2.compute.amazonaws.com/api...
const URL = 'api/products/search/findTopByCategoryNameAndScoreGreaterThanOrderByScoreDesc';

async function get(category, score) {
    const data = await fetch(`${URL}?categoryName=${category}&score=${score}&projection=ProductProjection`);
    return data.json()
}

export default ({get});

