import * as types from './types'

export const setSpinnerOn = () => dispatch => {
    dispatch({
        type:types.SET_SPINNER_ON
    })
}

export const setSpinnerOff = () => dispatch => {
    dispatch({
        type:types.SET_SPINNER_OFF
    })
}