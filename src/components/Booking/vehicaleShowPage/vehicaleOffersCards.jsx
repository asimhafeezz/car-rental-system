import React, { useState } from "react";

import {Link} from "react-router-dom";

import '../../util/main.css'



export default () => {
  return (
    <div className="vehicaleOffersCards-component-css">
      <div className="offercard-flex">
            <div className="firstflex">
            <Link href="#">
              <a>
                <h6 className="p-2">ADDITIONAL DRIVER</h6>
                <p className="p-2 small">
                  if your is less than 21 then pls select a drvier
                </p>
                <p className="font-weight-bold small pl-2 pt-2">2000Rs /-</p>
              </a>
            </Link>
            </div>
            
            <div className="secondflex">
            <Link href="#">
              <a>
                <h6 className="p-2">ADDITIONAL DRIVER</h6>
                <p className="p-2 small">
                  if your is less than 21 then pls select a drvier
                </p>
                <p className="font-weight-bold small pl-2 pt-2">2000Rs /-</p>
              </a>
            </Link>
            </div>
            <div className="thirdflex">
            <Link href="#">
              <a>
                <h6 className="p-2">ADDITIONAL DRIVER</h6>
                <p className="p-2 small">
                  if your is less than 21 then pls select a drvier
                </p>
                <p className="font-weight-bold small pl-2 pt-2">2000Rs /-</p>
              </a>
            </Link>
            </div>
          
      </div>
    </div>
  );
};
