import * as types from './types'

import {useDispatch} from 'react-redux'

export default () => {
    let dipatch = useDispatch()

    let setBookingStepValue = (newStepValue) => {
        dipatch({
            type: types.SET_BOOKING_STEP_VALUE,
            payload: newStepValue
        })
    } 

    

    return {
        setBookingStepValue
    }
}