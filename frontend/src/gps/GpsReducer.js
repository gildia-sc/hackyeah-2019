export default (state = {}, action) => {
    switch (action.type) {
        case 'GPS_SUCCESS':
            return ({coords: action.coords});
        default:
            return state
    }
}
export const gpsSuccess = (coords) => ({type: 'GPS_SUCCESS', coords});


