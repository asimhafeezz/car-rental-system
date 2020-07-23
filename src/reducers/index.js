import { combineReducers } from 'redux'

import authReduer from './authReducer'
import toggleReducer from './toggleReducer'
import utilReducer from './utilReducer'
import productItemReducer from './productItemReducer'

//redux persist reducer
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
    key: "root",
    storage,
    whitelist: ["productItem"]
  };

const rootReducer = combineReducers({
    auth: authReduer,
    toggle: toggleReducer,
    util: utilReducer,
    productItem: productItemReducer
})

export default persistReducer(persistConfig, rootReducer);
