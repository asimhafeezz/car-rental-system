import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import MailIcon from "@material-ui/icons/Mail";
import PhoneIcon from "@material-ui/icons/Phone";
// import Link from "next/link";

// //globalState Context
// import globalStateContext from '../../GlobalState/context'
// import {UtilContext} from '../../GlobalState/contexts/utilContext'

//redux
import {useSelector} from 'react-redux'

import "../../util/main.css";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(6),
    flexBasis: "33.33%",
    flexShrink: 0,
  },
}));

export default function ControlledExpansionPanels() {
  //global State Context
  // let store = React.useContext(globalStateContext)
  // let utilStore = React.useContext(UtilContext)

  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  //redux selector
  const isAuth = useSelector(state => state.auth.isAuthenticated)

  return (
    <div className="homepage-navbar-expentiondrawermenu-css">
      <div
        className={(classes.root, "pr-3 pl-3 pt-3 pb-3")}
        style={{ backgroundColor: "white" }}
      >
        <ExpansionPanel
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
          style={{ backgroundColor: "white", color: "black" }}
        >
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon style={{ color: "black" }} />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <h6 className="font-weight-bold">ACCOUNT</h6>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <ul className="allAtag" style={{ listStyleType: "none" }}>
              {
                isAuth === true ?
                  <div>
                    <li>
                      <a>My Account</a>
                    </li>
                    <li>
                      <a>Reservations</a>
                    </li>
                    <li>
                      <a>Driver Panel</a>
                    </li>
                    <li>
                      <a>Investor Panel</a>
                    </li>
                  </div>
                  :
                  <div>
                    <li>
                      <a>Log In or Register</a>
                    </li>
                    <li>
                      <a>Be a Driver</a>
                    </li>
                    <li>
                      <a>Be an Investor</a>
                    </li>
                  </div>
              }
            </ul>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel
          expanded={expanded === "panel2"}
          onChange={handleChange("panel2")}
          style={{ backgroundColor: "white", color: "black" }}
        >
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon style={{ color: "black" }} />}
            aria-controls="panel2bh-content"
            id="panel2bh-header"
          >
            <h6 className="font-weight-bold">RENTAL INFO</h6>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <ul className="allAtag" style={{ listStyleType: "none" }}>
              <li>
                <a>Log In or Register</a>
              </li>
              <li>
                <a>Change Reservation</a>
              </li>
              <li>
                <a>Cancel Reservation</a>
              </li>
              <li>
                <a>Request Invoice</a>
              </li>
            </ul>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel
          expanded={expanded === "panel3"}
          onChange={handleChange("panel3")}
          style={{ backgroundColor: "white", color: "black" }}
        >
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon style={{ color: "black" }} />}
            aria-controls="panel3bh-content"
            id="panel3bh-header"
          >
            <h6 className="font-weight-bold">ABOUT US</h6>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <ul className="allAtag" style={{ listStyleType: "none" }}>
              <li>
                <a>Log In or Register</a>
              </li>
              <li>
                <a>Change Reservation</a>
              </li>
              <li>
                <a>Cancel Reservation</a>
              </li>
              <li>
                <a>Request Invoice</a>
              </li>
            </ul>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel
          expanded={expanded === "panel4"}
          onChange={handleChange("panel4")}
          style={{ backgroundColor: "white", color: "black" }}
        >
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon style={{ color: "black" }} />}
            aria-controls="panel4bh-content"
            id="panel4bh-header"
          >
            <h6 className="font-weight-bold">HELP</h6>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <ul className="allAtag" style={{ listStyleType: "none" }}>
              <li>
                <a>Log In or Register</a>
              </li>
              <li>
                <a>Change Reservation</a>
              </li>
              <li>
                <a>Cancel Reservation</a>
              </li>
              <li>
                <a>Request Invoice</a>
              </li>
            </ul>
          </ExpansionPanelDetails>
        </ExpansionPanel>

        {/* <hr style={{backgroundColor:'white' }}/> */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
          }}
        >
          <section
            className="text-white small"
            style={{ alignSelf: "flex-end" , display:'flex' }}
          >
            <MailIcon style={{ margin: "1rem", color: "black" }} />
            <h6 style={{color: "black" , alignSelf:'center'}}>support@safar.com</h6>
          </section>

          <section
            className="text-white small"
            style={{ alignSelf: "flex-end" , display:'flex' }}
          >
            <PhoneIcon style={{ margin: "1rem", color: "black" }} />
            <h6 style={{color: "black" , alignSelf:'center'}}>0348-12345678</h6>
          </section>
        </div>
      </div>
    </div>
  );
}
