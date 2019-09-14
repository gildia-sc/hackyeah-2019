export default (state = 0, action) => {
    switch (action.type) {
        case 'SCANNING_STARTED':
            return state;
        case 'PRODUCT_DETECTED':
            return action.ean;
        case 'SCANNING_ENDED':
            return state;
        default:
            return state
    }
}

export const scannigStarted = (val) => ({type: 'SCANNING_STARTED', val})
export const productDetected = (ean) => ({type: 'PRODUCT_DETECTED', ean})
export const scannigEnded = (val) => ({type: 'SCANNING_ENDED', val})