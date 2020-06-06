import React from "react";

import '../../util/main.css'


export default () => {
  return (
    <>
    <div className="homepage-first-image">
    <div className="box">
      <img className="img-fluid imgclass" src="/vehicaleImagesStatic/mainImage.jpg" alt="Front Pic" />
      <div className="text" data-aos="fade-up" data-aos-duration="1500">
        <h1>LETS DISCOVER</h1>
        <h1>THE BEAUTY!</h1>
      </div>
    </div>
    </div>
    <h3
        className="mt-3"
        style={{ textAlign: "center"}}
      >
        "WE ARE HERE TO MAKE YOUR TOUR MORE ENJOYABLE AND BEAUTIFUL"
      </h3>
    </>
  );
};
