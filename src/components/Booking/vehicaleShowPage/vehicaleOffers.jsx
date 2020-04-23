import React  from 'react'

import { Typography } from "@material-ui/core";

import DoneIcon from "@material-ui/icons/Done";

import VehicaleOffersCards from "./vehicaleOffersCards";

// import globalStore from '../../../GlobalState/context'

import '../../util/main.css'



export default () => {
  let [offerincludelist, setofferincludelist] = React.useState([
    { key: "1", offer: "Unlimited miles" },
    { key: "2", offer: "Unlimited miless" }
  ]);

  // let store = useContext(globalStore)


  return (
    <div className="vehicaleOffers-component-css">
      <div className="vehicaleofferdiv">
        <Typography
          variant="h6"
          className="font-weight-bold pt-4 pl-3 mb-2 offerclass"
        >
          YOUR OFFER INCLUDES
        </Typography>
        {
          <ul style={{ alignSelf: "flex-start", listStyleType: "none" }}>
            {offerincludelist.map(items => {
              return (
                <li key={items.key}>
                  <h6 className="offerclass pl-3">
                    <DoneIcon className="pr-2" />
                    {items.offer}
                  </h6>
                </li>
              );
            })}
          </ul>
        }

        <Typography
          variant="h6"
          className="font-weight-bold pt-4 pl-3 mb-2 offerclass"
        >
          CHOOSE YOUR EXTRAS
        </Typography>
        <VehicaleOffersCards />
      </div>
    </div>
  );
};
