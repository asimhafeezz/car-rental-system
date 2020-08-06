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

  // const handleDateChange0 = date => {
  //   dispatch({
  //     type: types.SET_BOOKING_DATES,
  //     payload: date
  //   })
  // }

  // const handleDateChange1 = date => {
  //   dispatch({
  //     type: types.SET_BOOKING_DATES,
  //     payload: date
  //   })
  // }

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

  const setPickupLocation = data => {
    dispatch({
      type: types.SET_RETURN_LOCATION,
      payload: data
    })
  }

  const setReturnLocation = data => {
    dispatch({
      type: types.SET_RETURN_LOCATION,
      payload: data
    })
  }

  const setIsSameLocation = e => {
    dispatch({
      type: types.SET_IS_SAME_LOCATION,
      payload: e.target.checked
    })
  }

  const setIsSameLocationValue = data => {
    dispatch({
      type: types.SET_IS_SAME_LOCATION,
      payload: data
    })
  }

  const setis_payment_online_true = () => {
    dispatch({
      type: types.SET_IS_PAYMENT_ONLINE_TRUE
    })
  }

  const setis_payment_online_false = () => {
    dispatch({
      type: types.SET_IS_PAYMENT_ONLINE_FALSE
    })
  }

  const setBookingStatus = status => {
    dispatch({
      type: types.SET_BOOKING_STATUS,
      payload: status
    })
  }

  const setReservationNo = id => {
    dispatch({
      type: types.SET_BOOKING_RESERVATION_NO,
      payload: id
    })
  }

  return { setReservationNo , setIsSameLocationValue , setPickupLocation , setReturnLocation , handleDateChange , handlePickupTime , handleReturnTime , pickupLocationHandleChange , returnLocationHandleChange , setIsSameLocation , setis_payment_online_true , setis_payment_online_false , setBookingStatus}

}

export default BookingActions


