import * as types from './types'

import { useDispatch, useSelector } from 'react-redux'

export default () => {
    let dispatch = useDispatch()

    //getting the product Attributes value
    let setProductItemValues = (productItemName, productItemDesc) => {
        
        dispatch({
            type: types.SET_PRODUCT_ITEM_ATTRIBUTES_VALUES,
            payload: {
                pIN: productItemName,
                pID: productItemDesc
            }
        })
    } 

    const setPrice = (newPrice) => {
        dispatch({
            type: types.SET_BOOKING_PRICE_VALUE,
            payload: newPrice
        })
    }

    const setProductItemID = (newID) => {
        dispatch({
            type: types.SET_PRODUCT_ITEM_ID,
            payload: newID
        })
    }

    const setisDriverNeed = (bool) => {
        dispatch({
            type: types.SET_DRIVER,
            payload: bool
        })
    }

    const setisMoneyPaidOnline = (bool) => {
        dispatch({
            type: types.SET_MONEY_PAID_ONLINE,
            payload: bool
        })
    }

    const setisMoneyPaidOnlineLineThrough = (bool) => {
        dispatch({
            type: types.SET_MONEY_PAID_ONLINE_LINE_THROUGH,
            payload: bool
        })
    }

    return {setProductItemValues , setPrice , setProductItemID , setisDriverNeed , setisMoneyPaidOnline , setisMoneyPaidOnlineLineThrough}
}