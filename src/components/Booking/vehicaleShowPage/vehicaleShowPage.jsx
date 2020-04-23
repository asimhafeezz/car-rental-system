import React from "react";
import VehicaleSlides from "./vehicaleSlides";
import VehicaleIcon from "./vechicaleIcon";
import VehicaleOptions from "./vehicaleOptions";
import VehicaleOffers from "./vehicaleOffers";

import '../../util/main.css'

import MainBookingLayout from '../mainBookingLayout'


export default () => {
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
