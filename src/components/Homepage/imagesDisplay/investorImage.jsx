import React from "react";

import {Button} from '@material-ui/core'

import '../../util/main.css'



export default () => {



  return(
    <div className="homepage-investorimage-css">
  <div className="investorbox" data-aos="fade-up" data-aos-duration="1500">
    <img className="img-fluid" src="/vehicaleImagesStatic/cars.jpg" alt="Driver Image" />
    <div className="investortext">
      <h1>
        Share your vehicle <br /> & Let it earn for you
      </h1>
    </div>
    <div className="investorbtn">
    <Button className='rounded-0' size="large" variant="contained" color="primary" >SHARE A VEHICALE</Button>
    </div>
  </div>
  </div>
);
}