import React from "react";
import VehicaleSlides from "./vehicaleSlides";
import VehicaleIcon from "./vechicaleIcon";
import VehicaleOptions from "./vehicaleOptions";
import VehicaleOffers from "./vehicaleOffers";

//redux
import useUtilActions from '../../../actions/utilActions'

import '../../util/main.css'

import MainBookingLayout from '../mainBookingLayout'


export default () => {

  let { setBookingStepValue } = useUtilActions()
    
    React.useEffect(() => {
        setBookingStepValue("bookingStep2")
    },[])

  return (
    <MainBookingLayout>
    <div className="vehicaleShowPage-component-css">
      <div className="grid-container">
        <div className="firstgrid">
          <VehicaleSlides />
        </div>
        <div className="secondgrid">
          <VehicaleOptions />
        </div>
        <div className="thirdgrid">
          <VehicaleIcon />
        </div>
        <div className="fourthgrid">
          <VehicaleOffers />
        </div>
      </div>
    </div>
    </MainBookingLayout>
  );
};
