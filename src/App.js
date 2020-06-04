import React from 'react';
//css
import './App.css'
//route components
import HomePage from './components/Homepage/index'
import Login from './components/login/login'
import AvailableVehicales from './components/Booking/vehicales/vehicales'
import SpecificVehicaleDetails from './components/Booking/vehicaleShowPage/vehicaleShowPage'
import VehicaleBookingPage from './components/Booking/bookingForm/finalBF'
//main layout
import MainLayout from './components/common/MainLayout'
//react router dom
import { BrowserRouter as Router , Route , Switch , Redirect } from 'react-router-dom'

function App() {
  return (
    <div className="body">
     <Router>
     <Switch>
       <Redirect exact from="/" to="/home"/>
         <Route exact path="/login" component={Login} />
       </Switch>
     <MainLayout>
       <Switch>
         <Route exact path="/home" component={HomePage} />
       </Switch>
       <Switch>
         <Route exact path="/availablevehicales" component={AvailableVehicales} />
       </Switch>
       <Switch>
         <Route exact path="/vehicale" component={SpecificVehicaleDetails} />
       </Switch>
       <Switch>
         <Route exact path="/bookingform" component={VehicaleBookingPage} />
       </Switch>
       </MainLayout>
     </Router>
      </div>
  );
}

export default App;
