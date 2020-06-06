import * as types from '../actions/types'

const initialState = {
    bookingStepValue: ""
}

export default (state = initialState, action) => {
    switch (action.type) {
        case types.SET_BOOKING_STEP_VALUE:
            return {
                ...state,
                bookingStepValue:action.payload
            }
        default:
            return state
    }
}