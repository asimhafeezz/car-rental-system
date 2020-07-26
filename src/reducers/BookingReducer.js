import * as types from '../actions/types'

const initialState = {
    pickupLocation: null,
    returnLocation: null,
    bDates : [null, null],
    pickupTime : new Date(),
    returnTime : new Date()
}

export default (state = initialState, action) => {
    
    switch (action.type) {
        case types.SET_BOOKING_DATES:
            return {
                ...state,
                bDates: action.payload
            }
        case types.SET_PICKUP_TIME:
                return {
                    ...state,
                    pickupTime: action.payload
            }
        case types.SET_RETURN_TIME:
                return {
                    ...state,
                    returnTime: action.payload
            }
        case types.SET_PICKUP_LOCATION:
                return {
                    ...state,
                    pickupLocation: action.payload
            }
        case types.SET_RETURN_LOCATION:
                return {
                    ...state,
                    returnLocation: action.payload
                }
        default:
            return state
    }
}