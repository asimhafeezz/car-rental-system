import { combineReducers } from 'redux'

import authReduer from './authReducer'
import toggleReducer from './toggleReducer'
import utilReducer from './utilReducer'
import productItemReducer from './productItemReducer'
import bookingReducer from './BookingReducer'

//redux persist reducer
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
    key: "root",
    storage,
    whitelist: ["productItem" , 'booking']
  };

const rootReducer = combineReducers({
    auth: authReduer,
    toggle: toggleReducer,
    util: utilReducer,
    productItem: productItemReducer,
    booking: bookingReducer
})

export default persistReducer(persistConfig, rootReducer);
