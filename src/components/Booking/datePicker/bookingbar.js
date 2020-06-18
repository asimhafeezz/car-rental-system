// import "date-fns";
import React from "react";
// import DateFnsUtils from "@date-io/date-fns";
import {
  DatePicker,
  TimePicker
} from "@material-ui/pickers";
// import { MuiPickersUtilsProvider } from '@material-ui/pickers'
import Autocomplete from "@material-ui/lab/Autocomplete";
import { DateRangePicker, DateRangeDelimiter , MobileTimePicker} from "@material-ui/pickers";
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

  const [selectedDate, handleDateChange] = React.useState([null, null]);
  const [selectedDate1, handleDateChange1] = React.useState(new Date("2018-01-01T00:00:00.000Z"));
    
    
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
          <div className="container-fluid">
          <form onSubmit={()=>console.log("pick update",pickUptime)}>
            <div
              className="row"
              style={{ backgroundColor: "#202020", padding: "2.5%" }}
            >
              <div className="col-md-4 col-sm-12 col-xs-12 p-1">
                <Autocomplete
                  {...defaultProps}
                  renderInput={params => (
                    <TextField
                    variant="outlined"
                      fullWidth
                      stationname={stationName}
                      onChange={e => setstationName(e.target.stationName)}
                      {...params}
                      label="Select the Station"
                    />
                  )}
                />
              </div>

              <div className="col-md-5 col-sm-12 col-xs-12 p-1">
              <DateRangePicker
      startText="PickUp Date"
      endText="Return Date"
      disablePast
    //   disableMaskedInput
      variant="standard"
      value={selectedDate}
      onChange={date => handleDateChange(date)}
      renderInput={(startProps, endProps) => (
        <>
          <TextField variant="standard" className="mr-1" fullWidth {...startProps} />
          
          <TextField variant="standard" fullWidth {...endProps} />
        </>
      )}
    />
              </div>

              <div className="col-md-1 col-sm-6 col-xs-6 p-1">
              <MobileTimePicker
        renderInput={props => <TextField fullWidth variant="outlined" {...props} />}
        ampm
        ampmInClock
        // disableOpenPicker
        // showToolbar={false}
        // disableMaskedInput
        // autoOk
        showTodayButton
        todayText="now"
        label="PickUp Date"
        value={selectedDate1}
        onChange={handleDateChange1}
      />
              </div>

              <div className="col-md-1 col-sm-6 col-xs-6 p-1">
              <MobileTimePicker
        renderInput={props => <TextField fullWidth variant="outlined" {...props} />}
        ampm
        ampmInClock
        // disableOpenPicker
        // showToolbar={false}
        // disableMaskedInput
        // autoOk
        showTodayButton
        todayText="now"
        label="PickUp Date"
        value={selectedDate1}
        onChange={handleDateChange1}
      />
              </div>

              <div
                className="col-md-1 col-sm-12 col-xs-12 p-1"
                style={{ alignSelf: "center" , marginBottom:'1.3rem'}}
                >
                  <Link to="/availablevehicales" style={{textDecoration:'none'}}>
                <Button
                  type="submit"
                  className=""
                  size="large"
                  variant="contained"
                  color="primary"
                  fullWidth
                  style={{
                    padding: ".9rem 1rem .9rem 1rem",
                    textAlign: "center",
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
      </div>
    </div>
  );
}
