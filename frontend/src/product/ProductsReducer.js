export default (state = {products: [], error: null, isFetching: false, betterProducts: {}}, action) => {
    switch (action.type) {
        case 'FETCH_PRODUCT':
            return {...state, isFetching: true};
        case 'FETCH_PRODUCT_SUCCESS':
            return {...state, isFetching: false, products: combine(state.products, decorateFound(action.product))};
        case 'FETCH_PRODUCT_FAILURE':
            return {...state, isFetching: false, error: action.error.toString()};
        case 'PRODUCT_NOT_FOUND':
            return {...state, isFetching: false, products: combine(state.products, decorateNotFound(action.ean))};
        case 'FETCH_BETTER_PRODUCT_SUCCESS':
            console.log('Reducer')
            console.log(action)
            return {...state, isFetching: false, betterProducts: {...state.betterProducts, [action.ean]: action.targetProduct}};
        default:
            return state
    }
}
export const fetchProduct = (ean) => ({type: 'FETCH_PRODUCT', ean});
export const fetchProductSuccess = (product) => ({type: 'FETCH_PRODUCT_SUCCESS', product});
export const fetchProductFailure = (error) => ({type: 'FETCH_PRODUCT_FAILURE', error});
export const productNotFound = (ean) => ({type: 'PRODUCT_NOT_FOUND', ean});

function combine(products, product) {
    const filtered = products.filter(p => p.ean !== product.ean)
    return [product, ...filtered]
}

function decorateNotFound(ean) {
    return {ean, found: false}
}

function decorateFound(product) {
    return {...product, found: true}
}

