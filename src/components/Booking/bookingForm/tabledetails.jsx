import React from 'react'
import Divider from '@material-ui/core/Divider';

export default () => {
  return (
    <div
      className="container small"
      style={{
        color: "white",
        display: "flex",
        alignItems: "center",
        flexDirection: "column"
      }}
    >
      <h5
        className="pt-5 pb-2"
        style={{ display: "flex", justifyContent: "center", color: "white" }}
      >
              REVIEW & BOOK
      </h5>
          <Divider style={{color:'white'}} />
      <div style={{ display: "flex", justifyContent: "space-between" , borderTop:'1px solid white' , paddingTop:'2rem'}}>
        <img
          src="/logo1.png"
          alt="Reserved Vehicale"
          className="img-fluid"
          style={{ width: "20rem" }}
        />

        <div className="" style={{ textAlign: "left" , fontWeight:'bold' , fontSize:'1.2rem'}}>
          <h6>Vehicale Name</h6>
          <p style={{ textAlign: "left" }}>{`Station: ${`Lahore`}`}</p>
          <p
            style={{ textAlign: "left" }}
          >{`Apr 03 12:30 PM - Apr 05 08:30 AM`}</p>
        </div>
      </div>
      <table>
        <div className="pt-5 pb-5" style={{ textAlign: "left" , fontWeight:'bold' , fontSize:'1.1rem'}}>
          <tr>
            <td style={{ paddingRight: "207px" }}>Rent Fee</td>
            <td>12$/Day</td>
          </tr>
        </div>
        <hr />
        <div className="pt-5 pb-5" style={{ textAlign: "left" , fontWeight:'bold' , fontSize:'1rem'}}>
          <tr>
            <td>
              <h6>EXTRAS</h6>
            </td>{" "}
          </tr>
          <tr>
            <td style={{ paddingRight: "160px" }}>Additional Driver</td>
            <td>12$/Day</td>
          </tr>
          <tr>
            <td style={{ paddingRight: "160px" }}>Car Wifi</td>
            <td>12$/Day</td>
          </tr>
        </div>

        <div className="pt-3 pb-5 ml-2" style={{ textAlign: "left" , fontWeight:'bold' , fontSize:'1rem'}}>
          <tr>
            <td>
              <h6>FEES</h6>
            </td>{" "}
          </tr>
          <tr>
            <td style={{ paddingRight: "160px" }}>Rental Facility</td>
            <td>12$/Day</td>
          </tr>
          <tr>
            <td style={{ paddingRight: "160px" }}>Vehicale Lisence</td>
            <td>12$/Day</td>
          </tr>
        </div>
      </table>

     
    </div>
  );
};
