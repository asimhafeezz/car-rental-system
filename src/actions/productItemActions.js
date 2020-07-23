import * as types from './types'

import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'

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

    return {
        setProductItemValues
    }
}