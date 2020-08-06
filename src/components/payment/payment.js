import React, {useState} from 'react'
import StripeCheckout from 'react-stripe-checkout';
import { useSelector } from 'react-redux'

import useBookingActions from '../../actions/BookingActions'

export default ({setisMoneyPaidOnline , setisMoneyPaidOnlineLineThrough}) => {

    let price = useSelector(state => state.productItem.price)
    
    let { setis_payment_online_true } = useBookingActions()

  let onToken = (token) => {
      console.log(token)
      setisMoneyPaidOnline(false)
      setisMoneyPaidOnlineLineThrough(true)
      setis_payment_online_true()
  };
  
    return (
      <StripeCheckout
        stripeKey="pk_test_51HAZ8eEDPz0yRDkTBmrgUMMUBKTurOBP74AuDJubMTZdI8VQYnyPSKu6zigF6wIXRHKzOyumOscSNqLEeDFtywi700u96EkXlf"
        token={onToken}
        amount={price}
        country="PAK"
      />
    )
}