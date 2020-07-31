import React, {useState} from 'react'
import StripeCheckout from 'react-stripe-checkout';
import { useSelector } from 'react-redux'

export default ({setisMoneyPaidOnline , setisMoneyPaidOnlineLineThrough}) => {

  let price = useSelector(state => state.productItem.price)

  let onToken = (token) => {
    console.log(token)
      setisMoneyPaidOnline(false)
      setisMoneyPaidOnlineLineThrough(true)
  };
  
    return (
      <StripeCheckout
        stripeKey="pk_test_51HAZ8eEDPz0yRDkTBmrgUMMUBKTurOBP74AuDJubMTZdI8VQYnyPSKu6zigF6wIXRHKzOyumOscSNqLEeDFtywi700u96EkXlf"
        token={onToken}
        amount={price}
      />
    )
}