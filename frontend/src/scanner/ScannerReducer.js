export default (state = {}, action) => {
    switch (action.type) {
        case 'SCANNING_STARTED':
            return action.val;
        case 'SCANNING_ENDED':
            return action.val ;
        default:
            return state
    }
}

export const scannigStarted = (val) => ({ type: 'SCANNING_STARTED', val })
export const scannigEnded = (val) => ({ type: 'SCANNING_ENDED', val })