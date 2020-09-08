import { createStore, applyMiddleware , compose } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from '../reducers/index'

//redux persist
import { persistStore } from 'redux-persist'

const initialState = {}

const middleware = [thunk]

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
    rootReducer, 
    initialState,
    composeEnhancers(
        applyMiddleware(thunk)
      )
)


export const persistor = persistStore(store)

export default store