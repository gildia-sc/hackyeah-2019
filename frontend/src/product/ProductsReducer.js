export default (state = {products: [], error: null, isFetching: false}, action) => {
    switch (action.type) {
        case 'FETCH_PRODUCT':
            return {...state, isFetching: true};
        case 'FETCH_PRODUCT_SUCCESS':
            return {...state, isFetching: false, products: combine(state.products, action.product)};
        case 'FETCH_PRODUCT_FAILURE':
            return {...state, isFetching: false, error: action.error};
        default:
            return state
    }
}
export const fetchProduct = (ean) => ({type: 'FETCH_PRODUCT', ean});
export const fetchProductSuccess = (product) => ({type: 'FETCH_PRODUCT_SUCCESS', product});
export const fetchProductFailure = (error) => ({type: 'FETCH_PRODUCT_FAILURE', error});

function combine(products, product) {
    if (products.find(p => p.ean === product.ean)) {
        return products
    }
    return [product, ...products]
}