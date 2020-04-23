import { combineReducers } from 'redux'

import authReduer from './authReducer'
import toggleReducer from './toggleReducer'

export default combineReducers({
    auth: authReduer,
    toggle: toggleReducer
})