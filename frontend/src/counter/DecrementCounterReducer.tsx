export default (state = {}, action: any) => {
    switch (action.type) {
        case 'DECREMENT_REQUEST':
            return ({
                isFetching: true,
                error: null,
            });
        case 'DECREMENT_SUCCESS':
            return ({
                isFetching: false,
                error: null,
            });
        case 'DECREMENT_FAILURE':
            return ({
                isFetching: false,
                error: action.error,
            });
        default:
            return state;
    }
}

export const decrementRequest = () => ({type: 'DECREMENT_REQUEST'})
export const decrementSuccess = () => ({type: 'DECREMENT_SUCCESS'})
export const decrementFailure = (error: string) => ({type: 'DECREMENT_FAILURE', error})
