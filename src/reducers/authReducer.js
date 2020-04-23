import * as types from '../actions/types'

const initialState = {
    isAuthenticated: false
}

export default (state = initialState, action) => {
    switch (action.type) {
        case types.LOGGED_IN:
            return {
                ...state,
                isAuthenticated:true
            }
        case types.LOGGED_OUT:
                return {
                    ...state,
                    isAuthenticated:false
                }
        default:
            return state
    }
}