import { combineReducers } from 'redux'

import authReduer from './authReducer'
import toggleReducer from './toggleReducer'
import utilReducer from './utilReducer'

export default combineReducers({
    auth: authReduer,
    toggle: toggleReducer,
    util: utilReducer
})