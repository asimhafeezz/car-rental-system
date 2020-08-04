import React , { useState } from "react";

//icons
import ClearIcon from '@material-ui/icons/Clear';

//Upcomming reservation Car Component
let UpcommingCardComponent = ({
  vehicalePicPath,
  reservationNo,
  vehicaleName,
  pickupStation,
  pickupTime,
  returnStation,
  returnTime
}) => (
  <div className="profile-reservationtab-css container">
    <div className="reserveCards">
      <div className="rcard1">
        <img
          src='/vehicaleImagesStatic/jeep.jpg'
          alt="Car pic"
          fluid
          style={{ height: "10rem" }}
        />
      </div>

      <div className="rcard2">
        <p>Reservation No: 34355</p>
        <h3>
          <b>Toyota</b>
        </h3>
        <br></br>
        <h6>
          <b>Lahore</b>
        </h6>
        <span className="small">wednesday</span>
        <br />
        <i class="fa fa-arrow-down" aria-hidden="true"></i>
        <h6>
          <b>islamabad</b>
        </h6>
        <span className="small">thursday</span>
      </div>

      <div className="rcard3 mt-3">
        <a style={{cursor:'pointer'}}>
          <i><ClearIcon /></i>Cancel Reservation
        </a>

        <br />
        <a>
          <i class="fa fa-comments"></i>Update
        </a>
      </div>
    </div>
  </div>
    );

export default () => {
  let [bookedVehicaleDetails, setbookedVehicaleDetails] = useState([
    {
      vehicalePicPath: "/jeep2.jpg",
      reservationNo: "1234",
      vehicaleName: "Toyota",
      pickupStation: "Hunza Station",
      pickupTime: new Date(),
      returnStation: "Hunza Station",
      returnTime: new Date()
    },
    {
      vehicalePicPath: "/jeep2.jpg",
      reservationNo: "1234",
      vehicaleName: "Toyota",
      pickupStation: "Hunza Station",
      pickupTime: new Date(),
      returnStation: "Hunza Station",
      returnTime: new Date()
    },
    {
      vehicalePicPath: "/jeep2.jpg",
      reservationNo: "1234",
      vehicaleName: "Toyota",
      pickupStation: "Hunza Station",
      pickupTime: new Date(),
      returnStation: "Hunza Station",
      returnTime: new Date()
    }
  ]);

  return (
    <div className="col-md-10 col-sm-12 profile-reservationtab-css container">
      <div style={{ color:'white'}}>
        <div className="mainreservationclass container">
          <h3 className=" font-weight-bolder m-4">Reservations</h3>
          <hr />

          <UpcommingCardComponent />
          <UpcommingCardComponent />
          <UpcommingCardComponent />

          {/* {
            bookedVehicaleDetails.map(bvdetails =>{
              return(
                <UpcommingCardComponent
            vehicalePicPath={bvdetails.vehicalePicPath}
            reservationNo={bvdetails.reservationNo}
            vehicaleName={bvdetails.vehicaleName}
            pickupStation={bvdetails.pickupStation}
            pickupTime={bvdetails.pickupTime}
            returnStation={bvdetails.returnStation}
            returnTime={bvdetails.returnTime}
          />
              )
            })
          } */}
        </div>
      </div>
    </div>
  );
};
