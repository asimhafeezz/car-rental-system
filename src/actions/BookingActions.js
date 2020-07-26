import * as types from './types'
import { useDispatch } from 'react-redux'

const BookingActions = () => {

  let dispatch = useDispatch()

  const handleDateChange = dates => {
    dispatch({
      type: types.SET_BOOKING_DATES,
      payload: dates
    })
  }

  const handlePickupTime = date => {
    dispatch({
      type: types.SET_PICKUP_TIME,
      payload: date
    })
  }

  const handleReturnTime = date => {
    dispatch({
      type: types.SET_RETURN_TIME,
      payload: date
    })
  }

  const pickupLocationHandleChange = e => {
    dispatch({
      type: types.SET_PICKUP_LOCATION,
      payload: e.target.value
    })
  }

  const returnLocationHandleChange = e => {
    dispatch({
      type: types.SET_RETURN_LOCATION,
      payload: e.target.value
    })
  }

  return {handleDateChange , handlePickupTime , handleReturnTime , pickupLocationHandleChange , returnLocationHandleChange}

}

export default BookingActions


