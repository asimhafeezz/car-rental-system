import React from "react";

import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

import '../../util/main.css'

const Cardss = () => {
  return (
    <div className="homepage-offercards-css">
    <div className="mb-4 ml-4 mr-4">
      <h5
        className="text-white m-3"
        style={{ textAlign: "center" }}
      >
        "WE ARE HERE TO MAKE YOUR TOUR MORE ENJOYABLE AND BEAUTIFUL"
      </h5>

      <div className="flex-container">
        <div className="offerimg">
          <img className="img-fluid" src="/vehicaleImagesStatic/offercar2.jpg" alt="jeep" />
          <h2 className="headerstyle">Save 30% Off Today</h2>
          <a href="#" className="anchorstyle small font-weight-bold">
            Learn more <ArrowForwardIosIcon style={{fontSize:'1rem' , marginBottom:'.1rem'}} />
          </a>
        </div>

        <div className="carimg">
          <img className="img-fluid" src="/vehicaleImagesStatic/jeep.jpg" alt="jeep" />
          <h2 className="headerstyle2">Availaible Vehicals</h2>
          <a href="/showallvehicles" className="anchorstyle small font-weight-bold">
            See more <ArrowForwardIosIcon style={{fontSize:'1rem' , marginBottom:'.1rem'}} />
          </a>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Cardss;
