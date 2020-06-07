// import "date-fns";
import React from "react";
import DateFnsUtils from "@date-io/date-fns";
import {
  DatePicker,
  TimePicker
} from "@material-ui/pickers";
import { MuiPickersUtilsProvider } from '@material-ui/pickers'
import Autocomplete from "@material-ui/lab/Autocomplete";

import {
  TextField,
  Button
} from "@material-ui/core";

import {Link} from 'react-router-dom'

export default function MaterialUIPickers() {

  // The first commit of Material-UI
  const [pickUpDate, setpickUpDate] = React.useState(new Date());
  const [pickUptime, setpickUptime] = React.useState(new Date());
  const [returnDate, setreturnDate] = React.useState(new Date());
  const [returntime, setreturntime] = React.useState(new Date());

  const handlePickUpDateChange = date => {
    setpickUpDate(date);
  };

  const handlePickUpTimeChange = date => {
    setpickUptime(date);
  };

  const handleReturnDateChange = date => {
    setreturnDate(date);
  };

  const handleReturnTimeChange = date => {
    setreturntime(date);
  };

  //station selection

  const stations = [
    { title: "Hunza ( Gilgit )" },
    { title: "Skardu City" },
    { title: "Naran Kaghan" },
    { title: "Fairy Meadows" },
    { title: "Kalam ( Swat)" },
    { title: "Chitral" },
    { title: "Naltar Valley" }
  ];

  const defaultProps = {
    options: stations,
    getOptionLabel: option => option.title
  };

  const [stationName, setstationName] = React.useState(null);

  return (
    <div>
      <div className="bookingPage-bookingbar-css">
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <div className="container-fluid">
          <form onSubmit={()=>console.log("pick update",pickUptime)}>
            <div
              className="row"
              style={{ backgroundColor: "#202020", padding: "2.5%" }}
            >
              <div className="col-md-5 col-sm-12 col-xs-12 p-1">
                <Autocomplete
                  {...defaultProps}
                  renderInput={params => (
                    <TextField
                      fullWidth
                      stationname={stationName}
                      onChange={e => setstationName(e.target.stationName)}
                      {...params}
                      label="Select the Station"
                    />
                  )}
                />
              </div>

              <div className="col-md-2 col-sm-6 col-xs-6 p-1">
                <DatePicker
                  disableToolbar
                  disablePast
                  fullWidth
                  variant="inline"
                  format="dd/MM"
                  label="Pick-Up Date"
                  value={pickUpDate}
                  onChange={handlePickUpDateChange}
                />
              </div>

              <div className="col-md-1 col-sm-6 col-xs-6 p-1">
                <TimePicker
                  fullWidth
                  label="P-Time"
                  value={pickUptime}
                  onChange={handlePickUpTimeChange}
                />
              </div>

              <div className="col-md-2 col-sm-6 col-xs-6 p-1">
                <DatePicker
                  disableToolbar
                  disablePast
                  fullWidth
                  variant="inline"
                  format="dd/MM"
                  label="Return Date"
                  value={returnDate}
                  onChange={handleReturnDateChange}
                />
              </div>

              <div className="col-md-1 col-sm-6 col-xs-6 p-1">
                <TimePicker
                  fullWidth
                  label="R-Time"
                  value={returntime}
                  onChange={handleReturnTimeChange}
                />
              </div>

              <div
                className="col-md-1 col-sm-12 col-xs-12 p-1"
                style={{ alignSelf: "flex-end" }}
                >
                  <Link to="/availablevehicales" style={{textDecoration:'none'}}>
                <Button
                  type="submit"
                  className="rounded-0"
                  size="large"
                  variant="contained"
                  color="primary"
                  fullWidth
                  style={{
                    padding: ".5rem 1rem .5rem 1rem",
                    textAlign: "center",
                    borderRadius: "0px",
                    color: '#eeeeee'
                  }}
                >
                 OFFERS
                </Button>
                </Link>
              </div>
            </div>
            </form>
          </div>
        </MuiPickersUtilsProvider>
      </div>
    </div>
  );
}
