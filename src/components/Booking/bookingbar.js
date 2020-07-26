import React, { useState } from "react";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { DateRangePicker, DateRangeDelimiter , MobileTimePicker} from "@material-ui/pickers";
import {
  TextField,
  Button,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Checkbox,
  FormControlLabel
} from "@material-ui/core";

import { useHistory } from 'react-router-dom'



//redux 
import {useSelector , useDispatch} from 'react-redux'
import useBookingActions from '../../actions/BookingActions'
import * as types from '../../actions/types'

export default function MaterialUIPickers() {

  //redux
  const dispatch = useDispatch()
  //react router dom
  const {push} = useHistory()
  //bookingactions
  const { handleDateChange , handlePickupTime , handleReturnTime , returnLocationHandleChange , pickupLocationHandleChange} = useBookingActions()
  //redux values
  const BookingValues = useSelector(state => {
    return {
    pickupLocation: state.booking.pickupLocation,
    returnLocation: state.booking.returnLocation,
    dates: state.booking.bDates,
    pickupTime: state.booking.pickupTime,
    returnTime: state.booking.returnTime,
    }
  })

  const [isSameLocation , setIsSameLocation] = useState(true)

  const onFormSubmitHandle = (e) => {
    e.preventDefault()
    console.log("values", BookingValues)
    push('/availablevehicales')
  }

  const stations = [
    { title: "Hunza ( Gilgit )" },
    { title: "Skardu City" },
    { title: "Naran Kaghan" },
    { title: "Fairy Meadows" },
    { title: "Kalam ( Swat)" },
    { title: "Chitral" },
    { title: "Naltar Valley" }
  ];

  React.useEffect(() => {
    dispatch({
      type: types.SET_RETURN_LOCATION,
      payload: BookingValues.pickupLocation
    })
  },[isSameLocation])

  return (
    <div>
      <div className="bookingPage-bookingbar-css">
          <div className="container-fluid">
          <form onSubmit={onFormSubmitHandle}>
            <div
              className="row"
              style={{ backgroundColor: "#202020", padding: "2.5%" , transition:'4sec all' }}
            >
              <div className="col-md-4 col-sm-12 col-xs-12 p-1">
          <FormControl fullWidth>    
          <InputLabel id="demo-simple-select-label" style={{marginLeft:'1rem'}}>Pickup Location</InputLabel>
          <Select
          labelId="demo-simple-select-label"
          value={BookingValues.pickupLocation}
          onChange={e => {
            isSameLocation && dispatch({
              type: types.SET_RETURN_LOCATION,
              payload: e.target.value
            })
            
            return pickupLocationHandleChange(e)
          }}
          variant="outlined"
          fullWidth
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {
            stations.map(item => {
              return <MenuItem key={item.title} value={item.title}>{item.title}</MenuItem>
            })
          }
        </Select>
        </FormControl>
        <FormControlLabel
        style={{color:'#eeeeee'}}
        control={<Checkbox checked={isSameLocation} onChange={e => setIsSameLocation(e.target.checked)} name="issamelocation" />}
        label="Same Return Location"
      />
              </div>

      
      <div className="col-md-5 col-sm-12 col-xs-12 p-1">
      <DateRangePicker
      startText="PickUp Date"
      endText="Return Date"
      disablePast
      variant="standard"
      value={BookingValues.dates}
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
        showTodayButton
        todayText="now"
        label="PickUp Date"
        value={BookingValues.pickupTime}
        onChange={handlePickupTime}
      />
      </div>

        <div className="col-md-1 col-sm-6 col-xs-6 p-1">
        <MobileTimePicker
        renderInput={props => <TextField fullWidth variant="outlined" {...props} />}
        ampm
        ampmInClock
        showTodayButton
        todayText="now"
        label="PickUp Date"
        value={BookingValues.returnTime}
        onChange={handleReturnTime}
      />
      </div>

      <div
      className="col-md-1 col-sm-12 col-xs-12 p-1"
      // style={{ alignSelf: "center" , marginBottom:'1.3rem'}}
              >
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
              </div>
              
              {
                !isSameLocation &&
                <div className="col-md-4 col-sm-12 col-xs-12 p-1">
                <FormControl fullWidth>    
                <InputLabel id="demo-simple-select-label" style={{marginLeft:'1rem'}}>Return Location</InputLabel>
                <Select
                labelId="demo-simple-select-label"
                value={BookingValues.returnLocation}
                onChange={returnLocationHandleChange}
                variant="outlined"
                fullWidth
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                {
                  stations.map(item => {
                    return <MenuItem key={item.title} value={item.title}>{item.title}</MenuItem>
                  })
                }
              </Select>
              </FormControl>
                    </div> 
              }
            </div>
            </form>
          </div>
      </div>
    </div>
  );
}
