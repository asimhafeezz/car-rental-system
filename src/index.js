import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
//muipicker
import { LocalizationProvider } from "@material-ui/pickers";
import DateFnsAdapter from "@material-ui/pickers/adapter/date-fns"
//redux
import { Provider } from 'react-redux'
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from './store/store'

ReactDOM.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
    <LocalizationProvider dateAdapter={DateFnsAdapter}>
  <React.StrictMode>
    <App />
    </React.StrictMode>
    </LocalizationProvider>
    </PersistGate>
    </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
