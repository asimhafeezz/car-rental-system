import React from 'react';
//css
import './App.css'
//aos
import AOS from 'aos';
//route components
import HomePage from './components/Homepage/index'
import Login from './components/login/login'
import AvailableVehicales from './components/Booking/vehicales/vehicalesItem'
import ProductCar from './components/Booking/vehicales/vehicaleView/newVehicles'
import SpecificVehicaleDetails from './components/Booking/productViewPage/index'
import VehicaleBookingPage from './components/Booking/bookingForm/index'
import DealPage from './components/Homepage/cards/dealPage/dealPage'
import Reservations from './components/login/profile/profileLayout'
import Franchises from './components/franchises/index'
import ThankYou from './components/Booking/thankyouPage'

//contact us form 
import Contact from './components/contact/contact'

//main layout
import MainLayout from './components/common/MainLayout'
//react router dom
import { BrowserRouter as Router , Route , Switch , Redirect } from 'react-router-dom'

function App() {

  React.useEffect(() => {
    AOS.refresh();
  }, [])
  
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
         <Route exact path="/productcar/:productid" component={ProductCar} />
       </Switch>
       <Switch>
         <Route exact path="/availablevehicales/:vehicaleid" component={SpecificVehicaleDetails} />
       </Switch>
       <Switch>
         <Route exact path="/bookingform" component={VehicaleBookingPage} />
       </Switch>
       <Switch>
         <Route exact path="/contactus" component={Contact} />
       </Switch>
       <Switch>
         <Route exact path="/offer/:offerid" component={DealPage} />
       </Switch>
       <Switch>
         <Route exact path="/reservations" component={Reservations} />
       </Switch>
       <Switch>
         <Route exact path="/franchises" component={Franchises} />
       </Switch>
       <Switch>
         <Route exact path="/thankyou" component={ThankYou} />
       </Switch>
       </MainLayout>
     </Router>
      </div>
  );
}

export default App;
