import * as types from '../actions/types'

const initialState = {
    pickupLocation: null,
    returnLocation: null,
    bDates : [new Date("YYYY-MM-DD"), new Date("YYYY-MM-DD")],
    pickupTime : new Date(),
    returnTime: new Date(),
    isSameLocation: true,
    is_paymet_online: false,
    bookingStatus: '',
    reservationNo: null
    
}


export default (state = initialState, action) => {
    
    switch (action.type) {
        case types.SET_BOOKING_DATES:
            return {
                ...state,
                bDates: action.payload
            }
        // case types.SET_BOOKING_DATE0:
        //     return {
        //         ...state,
        //         [bDates[0]]: action.payload
        //     }
        // case types.SET_BOOKING_DATE1:
        //     return {
        //         ...state,
        //         [bDates[1]]: action.payload
        //     }
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
        case types.SET_IS_SAME_LOCATION:
                return {
                    ...state,
                    isSameLocation: action.payload
                }
        case types.SET_IS_PAYMENT_ONLINE_TRUE:
                return {
                    ...state,
                    is_payment_online: true
            }
        case types.SET_IS_PAYMENT_ONLINE_FALSE:
                return {
                    ...state,
                    is_payment_online: false
            }
        case types.SET_BOOKING_STATUS:
                return {
                    ...state,
                    bookingStatus: action.payload
            }
        case types.SET_BOOKING_RESERVATION_NO:
                return {
                    ...state,
                    reservationNo: action.payload
            }
        default:
            return state
    }
}