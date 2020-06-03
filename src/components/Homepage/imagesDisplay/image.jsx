import React from "react";

import '../../util/main.css'


export default () => {
  return (
    <>
    <div className="homepage-first-image">
    <div className="box">
      <img className="img-fluid imgclass" src="/vehicaleImagesStatic/jeep3.jpg" alt="Front Pic" />
      <div className="text">
        <h1>LETS DISCOVER</h1>
        <h1>THE BEAUTY</h1>
      </div>
    </div>
    </div>
    <h3
        className="m-3"
        style={{ textAlign: "center"}}
      >
        "WE ARE HERE TO MAKE YOUR TOUR MORE ENJOYABLE AND BEAUTIFUL"
      </h3>
    </>
  );
};
