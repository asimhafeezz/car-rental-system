import * as types from '../actions/types'

const initialState = {
    productItemName: '',
    productItemDescription: ''
}

export default (state = initialState, action) => {
    switch (action.type) {
        case types.SET_PRODUCT_ITEM_ATTRIBUTES_VALUES:
            return {
                ...state,
                productItemName:action.payload.pIN,
                productItemDescription:action.payload.pID
            }
        default:
            return state
    }
}