export default (state = {product: null, error: null, isFetching: false, query: {}}, action) => {
    switch (action.type) {
        case 'FETCH_BETTER_PRODUCT':
            return {...state, isFetching: true, query: action.query};
        case 'FETCH_BETTER_PRODUCT_SUCCESS':
            return {...state, isFetching: false, product: action.product};
        case 'FETCH_BETTER_PRODUCT_FAILURE':
            return {...state, isFetching: false, error: action.error.toString()};
        default:
            return state
    }
}
export const fetchBetterProduct = (query) => ({type: 'FETCH_BETTER_PRODUCT', query});
export const fetchBetterProductSuccess = (product) => ({type: 'FETCH_BETTER_PRODUCT_SUCCESS', product});
export const fetchBetterProductFailure = (error) => ({type: 'FETCH_BETTER_PRODUCT_FAILURE', error});
