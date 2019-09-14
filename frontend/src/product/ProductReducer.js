export default (state = {product: {}, error: null, isFetching: false}, action) => {
    switch (action.type) {
        case 'FETCH_PRODUCT':
            return {...state, isFetching: true};
        case 'FETCH_PRODUCT_SUCCESS':
            return {...state, isFetching: false, product: action.product};
        case 'FETCH_PRODUCT_FAILURE':
            return {...state, isFetching: false, error: action.error};
        default:
            return state
    }
}
export const fetchProduct = () => ({type: 'FETCH_PRODUCT'});
export const fetchProductSuccess = (product) => ({type: 'FETCH_PRODUCT_SUCCESS', product});
export const fetchProductFailure = (error) => ({type: 'FETCH_PRODUCT_FAILURE', error});