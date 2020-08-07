import React , { useState } from "react";

//icons
import ClearIcon from '@material-ui/icons/Clear';
import CreateIcon from '@material-ui/icons/Create';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import Tooltip from '@material-ui/core/Tooltip';
import DoneIcon from '@material-ui/icons/Done';

//redux
import useBookingActions from '../../../actions/BookingActions'
import useProductItemActions from '../../../actions/productItemActions'

import Spinner from '../../util/spinner'

import axios from "axios";

import {useHistory} from 'react-router-dom'

import { IconButton } from "@material-ui/core";

//Upcomming reservation Car Component
let UpcommingCardComponent = ({
  pickup_location,
  return_location,
  vehicleID,
  reservationNo,
  start_date,
  end_date,
  total_price,
  vehicleData,
  vehicle_name,
  vehicle_imagePath,
  is_payment_online,
  setisDeleted,
  isDeleted,
  handleDateChange,
  setPickupLocation,
  setReturnLocation,
  setIsSameLocationValue,
  setProductItemID,
  push,
  setBookingStatus,
  setis_payment_online_false,
  setis_payment_online_true,
  setReservationNo,
  setoldPrice
}) => {
  
  let onDeleteButtonClick = (id) => {
    axios.post(`http://127.0.0.1:5000/deleteBooking?id=${id}`)
      .then(() => {
      setisDeleted(!isDeleted)
      })
      .catch(err => console.log(err.message))
  }

  let onUpdateButtonClick = (id) => {
    let datearr = []
    axios.get(`http://127.0.0.1:5000/getOneBooking?id=${id}`)
      .then((res) => {
        let d0 = Date.parse(res.data.data[0].start_date)
        let d1 = Date.parse(res.data.data[0].end_date)
        let date0 = new Date(d0)
        let date1 = new Date(d1)
        datearr.push(date0)
        datearr.push(date1)
        handleDateChange(datearr)
        setReservationNo(reservationNo)
        setoldPrice(total_price)
        setPickupLocation(res.data.data[0].pickup_location)
        setReturnLocation(res.data.data[0].return_location)
        setProductItemID(res.data.data[0].vehicle_id)
        console.log(res.data.data[0].vehicle_id)
        if (res.data.data[0].pickup_location === res.data.data[0].return_location) {
          setIsSameLocationValue(true)
        }
        else {
          setIsSameLocationValue(false)
        }
        if (is_payment_online) {
          setis_payment_online_true()
        }
        else {
          setis_payment_online_false()
        }
        setBookingStatus('updating')
        push('/updatevehicles')
        console.log(datearr)
      })
      .catch(err => console.log(err.message))
  }

  return (
  <div className="profile-reservationtab-css container">
    <div className="reserveCards" style={{backgroundColor:'#202021' , minHeight:'18rem' , paddingTop:'1.9rem'}}>
      <div className="rcard1">
        <img
          src={`http://localhost:3335/${vehicle_imagePath}`}
          alt="Car pic"
          fluid
          style={{ height: "10rem" , borderRadius:'.5rem' }}
        />
        <p className="mt-3" style={{color:'#eeeeee'}}>Total Price: <strong style={{color:'#fd7014' , fontSize:'1.2rem' , marginLeft:'.5rem'}}>{total_price} Rs</strong></p>
        <p style={{color:'#eeeeee' , marginTop:'-1.1rem'}}>Payment: <strong style={{color:'#fd7014' , marginLeft:'.5rem'}}>{is_payment_online ? <DoneIcon className="mb-1" /> : "Pending..."}</strong></p>
      </div>

      <div className="rcard2" style={{color:'#eeeeee'}}>
        <p><strong>Reservation No: {reservationNo}</strong></p>
        <h3>
            <b>{vehicle_name}</b>
        </h3>
        <br></br>
        <h6>
          <b>{pickup_location}</b>
        </h6>
        <span className="small">{start_date}</span>
        <br />
        <ArrowDownwardIcon className="mt-1 mb-1" />
        <h6>
          <b>{return_location}</b>
        </h6>
          <span className="small">{end_date}</span>
      </div>

      <div className="rcard3">
      <a style={{cursor:'pointer' , color:'fd7014'}}>
          <i><Tooltip color="primary" title="Update Booking" arrow><IconButton onClick={()=> onUpdateButtonClick(reservationNo)} style={{outline:'none'}}><CreateIcon /></IconButton></Tooltip></i>
        </a>
        <a style={{cursor:'pointer' , color:'fd7014'}}>
          <i><Tooltip color="primary" title="Cancel Booking" arrow><IconButton onClick={() => onDeleteButtonClick(reservationNo)} style={{outline:'none'}}><ClearIcon /></IconButton></Tooltip></i>
        </a>
      </div>
    </div>
  </div>
  );}
    
  //css
let centerSpinner = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '30rem',
  flexDirection: 'column',
  color:'#eeeeee'
}

export default (props) => {

  let [bookings , setbookings] = useState([])
  let [vehicleData , setvehicleData] = useState([])
  let [isLoading , setisLoading] = useState(true)
  let [isDeleted, setisDeleted] = useState(false)
  let [datee, setdatee] = useState(new Date())
  
  let { push } = useHistory()

  let {setReservationNo , setBookingStatus , setis_payment_online_false , setis_payment_online_true , setPickupLocation , setReturnLocation , handleDateChange, setIsSameLocationValue } = useBookingActions()
  
  let { setoldPrice , setProductItemID } = useProductItemActions()

  React.useEffect(() => {
    setdatee(datee.getTime())
  },[])

  React.useEffect(() => {
    
    setisLoading(true)

  axios.get(`http://127.0.0.1:5000/getBooking?user_id=249`)
    .then(res => {
      setbookings(res.data.data)
      // console.log(res.data.data)
      setTimeout(() => {
        setisLoading(false)
      },1200)
    })
      .catch(err => console.log(err.message))
  }, [isDeleted])
  


  return (
    <div className="col-md-10 col-sm-12 profile-reservationtab-css container">
      <div style={{ color:'white'}}>
        <div className="mainreservationclass container">
          <h3 className=" font-weight-bolder m-4" style={{color:'#eeeeee'}}>Current Reservations</h3>
          <hr style={{backgroundColor:'#fd7014' , height:'1px'}} />

          {isLoading ? <section style={centerSpinner}><Spinner /><h5>Loading...</h5></section> : (
            bookings.length === 0 ? <section style={centerSpinner}><h5>No Booking Found!</h5></section> : (
            
            bookings.map(item => {
              return datee > Date.parse(item.end_date) ? <section style={centerSpinner}><h5>No Current Booking Found!</h5></section> :(
               <UpcommingCardComponent key={item.id} setoldPrice={setoldPrice} setReservationNo={setReservationNo} setBookingStatus={setBookingStatus} setis_payment_online_false={setis_payment_online_false} setis_payment_online_true={setis_payment_online_true} push={push} setProductItemID={setProductItemID} setIsSameLocationValue={setIsSameLocationValue} setPickupLocation={setPickupLocation} setReturnLocation={setReturnLocation} handleDateChange={handleDateChange} isDeleted={isDeleted} setisDeleted={setisDeleted} reservationNo={item.id} vehicleID={item.vehicle_id} is_payment_online={item.is_payment_online} pickup_location={item.pickup_location} return_location={item.return_location} start_date={item.start_date} end_date={item.end_date} total_price={item.total_price} vehicleData={vehicleData} vehicle_name={item.vehicle_name} vehicle_imagePath={item.vehicle_imagePath} />)
            })))
          }
        </div>
        <div className="mainreservationclass container">
          <h3 className=" font-weight-bolder m-4" style={{color:'#eeeeee'}}>Past Reservations</h3>
          <hr style={{backgroundColor:'#fd7014' , height:'1px'}} />

          {isLoading ? <section style={centerSpinner}><Spinner /><h5>Loading...</h5></section> : (
            bookings.length === 0 ? <section style={centerSpinner}><h5>No Booking Found!</h5></section> : (
            
            bookings.map(item => {
              return datee > Date.parse(item.end_date) ? (
               <UpcommingCardComponent key={item.id} setReservationNo={setReservationNo} setBookingStatus={setBookingStatus} setis_payment_online_false={setis_payment_online_false} setis_payment_online_true={setis_payment_online_true} push={push} setProductItemID={setProductItemID} setIsSameLocationValue={setIsSameLocationValue} setPickupLocation={setPickupLocation} setReturnLocation={setReturnLocation} handleDateChange={handleDateChange} isDeleted={isDeleted} setisDeleted={setisDeleted} reservationNo={item.id} vehicleID={item.vehicle_id} is_payment_online={item.is_payment_online} pickup_location={item.pickup_location} return_location={item.return_location} start_date={item.start_date} end_date={item.end_date} total_price={item.total_price} vehicleData={vehicleData} vehicle_name={item.vehicle_name} vehicle_imagePath={item.vehicle_imagePath} />): null
            })))
          }
          <section style={centerSpinner}><h5>No Past Booking Found!</h5></section>
        </div>
      </div>
    </div>
  );
};
