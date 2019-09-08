export default (state = {}, action: any) => {
    switch (action.type) {
        case 'GET_COUNTER_REQUEST':
            return ({
                ...state,
                isFetching: true,
                error: null,
            });
        case 'GET_COUNTER_SUCCESS':
            return ({
                isFetching: false,
                error: false,
                data: action.data
            });
        case 'GET_COUNTER_FAILURE':
            return ({
                ...state,
                isFetching: false,
                error: null,
            });
        default:
            return state;
    }
}

export const getCounterRequest = () => ({type: 'GET_COUNTER_REQUEST'})
export const getCounterSuccess = (data: string) => ({type: 'GET_COUNTER_SUCCESS', data})
export const getCounterFailure = (error: string) => ({type: 'GET_COUNTER_FAILURE', error})
