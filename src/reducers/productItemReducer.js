import * as types from '../actions/types'

const initialState = {
    productItemName: '',
    productItemID: '',
    productItemDescription: '',
    price: '',
    isNeedDriver: false,
    isMoneyPaidOnline: false,
    isMoneyPaidOnlineLineThrough: false
}

export default (state = initialState, action) => {
    switch (action.type) {
        case types.SET_PRODUCT_ITEM_ATTRIBUTES_VALUES:
            return {
                ...state,
                productItemName:action.payload.pIN,
                productItemDescription:action.payload.pID
            }
        case types.SET_BOOKING_PRICE_VALUE:
            return {
                ...state,
                price: action.payload
            }
        case types.SET_PRODUCT_ITEM_ID:
            return {
                ...state,
                productItemID: action.payload
            }
        default:
            return state
    }
}