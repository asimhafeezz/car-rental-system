import * as types from '../actions/types'

const initialState = {
    spinner: false
}

export default (state = initialState, action) => {
    
    switch (action.type) {
        case types.SET_SPINNER_ON:
            return {
                ...state,
                spinner: true
            }
        case types.SET_SPINNER_OFF:
                return {
                    ...state,
                    spinner: false
                }
        default:
            return state
    }
}