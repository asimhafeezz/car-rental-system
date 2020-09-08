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
  FormControlLabel,
  FormHelperText
} from "@material-ui/core";

import { useHistory } from 'react-router-dom'
import axios from 'axios'
import CircularProgress from '@material-ui/core/CircularProgress';

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
  const {setIsSameLocationValue , setis_payment_online_false , setBookingStatus , handleDateChange , handlePickupTime , handleReturnTime , returnLocationHandleChange , pickupLocationHandleChange , setIsSameLocation} = useBookingActions()
  //redux values
  const BookingValues = useSelector(state => {
    return {
    pickupLocation: state.booking.pickupLocation,
    returnLocation: state.booking.returnLocation,
    dates: state.booking.bDates,
    pickupTime: state.booking.pickupTime,
    returnTime: state.booking.returnTime,
    isSameLocation: state.booking.isSameLocation
    }
  })

  //select validation
  const [hasError  , setHasError] = useState(false)
  const [WindowWidthIsLess  , setWindowWidthIsLess] = useState(true)

  // const [isSameLocation , setIsSameLocation] = useState(true)
  const [isLoading , setisLoading] = useState(true)

  const onFormSubmitHandle = (e) => {
    e.preventDefault()
    setHasError(false);
    if (BookingValues.pickupLocation === null || "") {
      setHasError(true);
    }
    else {
      console.log("values", BookingValues)
      setBookingStatus('')
      setis_payment_online_false()
      push('/availablevehicales') 
    }
  }

  const [stations , setstations] = useState([])

  React.useEffect(() => {
    if (BookingValues.isSameLocation) {
      dispatch({
        type: types.SET_RETURN_LOCATION,
        payload: BookingValues.pickupLocation
      })
    }
    
  },[BookingValues.isSameLocation])

  React.useEffect(() => {
    setIsSameLocationValue(true)
    axios.get('http://localhost:3333/allfranchises').then(res => {
      setstations(res.data.data)
    })
  },[])

  // React.useEffect(()=>{
  //   console.log('window inner width'  , window.innerWidth)
  //   window.innerWidth >= 720 ? setWindowWidthIsLess(true) : setWindowWidthIsLess(false) 
  // },[window.innerWidth])

  return (
    <div>
      <div className="bookingPage-bookingbar-css transitionAllClass" >
          <div className="container-fluid">
          <form onSubmit={onFormSubmitHandle}>
            <div
              className="row"
              style={{ backgroundColor: "#202020", padding: "2.5%"}}
            >
              <div className="col-md-4 col-sm-12 col-xs-12 p-1">
          <FormControl fullWidth error={hasError}>    
          <InputLabel id="demo-simple-select-label" style={{marginLeft:'1rem', marginBottom:'1rem'}}>Pickup Location</InputLabel>
          <Select
          labelId="demo-simple-select-label"
          value={BookingValues.pickupLocation}
          onChange={e => {
            BookingValues.isSameLocation && dispatch({
              type: types.SET_RETURN_LOCATION,
              payload: e.target.value
            })
            if (BookingValues.pickupLocation === null || "") {
              setHasError(false);
            }
            return pickupLocationHandleChange(e)
          }}
          variant="outlined"
          fullWidth
        >
          <MenuItem value={null}>
            <em>None</em>
          </MenuItem>
          {
            stations.map(item => {
              return <MenuItem key={item._id} value={item.franchiseName}>{item.franchiseName}</MenuItem>
            })
          }
        </Select>
        {hasError && <FormHelperText>Please Select a Pickup Location!</FormHelperText>}
        </FormControl>
        
        
        <FormControlLabel
        style={{color:'#eeeeee'}}
        control={<Checkbox color="primary" checked={BookingValues.isSameLocation} onChange={e => setIsSameLocation(e)} name="issamelocation" />}
        label="Same Return Location"
      />
      
      
      
      
      {
                !BookingValues.isSameLocation &&
                <FormControl fullWidth>    
                <InputLabel id="demo-simple-select-label" style={{marginLeft:'1rem' , marginBottom:'1rem'}}>Return Location</InputLabel>
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
                    return <MenuItem key={item._id} value={item.franchiseName}>{item.franchiseName}</MenuItem>
                  })
                }
              </Select>
              </FormControl>
              }
      
      
      
      
      
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
          <TextField variant="standard" className={WindowWidthIsLess ? 'mr-1' : null} fullWidth {...startProps} />
          
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
        label="PickUp Time"
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
        label="Return Time"
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
            </div>
            </form>
          </div>
      </div>
    </div>
  );
}
