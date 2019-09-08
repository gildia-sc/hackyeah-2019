export default (state = {}, action: any) => {
    switch (action.type) {
        case 'INCREMENT_REQUEST':
            return ({
                isFetching: true,
                error: null,
            });
        case 'INCREMENT_SUCCESS':
            return ({
                isFetching: false,
                error: null,
            });
        case 'INCREMENT_FAILURE':
            return ({
                isFetching: false,
                error: action.error,
            });
        default:
            return state;
    }
}

export const incrementRequest = () => ({type: 'INCREMENT_REQUEST'})
export const incrementSuccess = () => ({type: 'INCREMENT_SUCCESS'})
export const incrementFailure = (error: string) => ({type: 'INCREMENT_FAILURE', error})
