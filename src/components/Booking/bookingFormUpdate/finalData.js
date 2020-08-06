import React , {useState , useEffect} from 'react'
import {Row , Container , Col} from 'react-bootstrap'

//progress
import CircularProgress from '@material-ui/core/CircularProgress';

import { Button } from '@material-ui/core'

import Payment from '../../payment/payment'


//get date formate
import { GetDateFormate } from '../../util/dateFormate'


//product item value service
//productitem arrtibute valuse service
import useProductItemAttributeValueService from '../../../services/productServices/productItemAttributeValue'

//redux
import { useSelector } from 'react-redux'
import useProductItemActions from '../../../actions/productItemActions'
import useBookingActions from '../../../actions/BookingActions'

import {useHistory} from 'react-router-dom'
import axios from 'axios';
import BookingActions from '../../../actions/BookingActions';

export default () => {

    let [isPayLater, setisPayLater] = useState(true)
    let [isBooking, setisBooking] = useState(false)
    let [isLoading, setisLoading] = useState(false)
    const [isNeedDriver , setIsNeedDriver] = useState(false)
    const [isMoneyPaidOnline, setisMoneyPaidOnline] = useState(false)
    const [isMoneyPaidOnlineLineThrough, setisMoneyPaidOnlineLineThrough] = useState(false)
    const [isLoadingPrice, setIsLoadingPrice] = useState(true)
    const [totalDays, setTotalDays] = useState(0)
    const [firstPrice, setFirstPrice] = useState(0)
    const [driverCost, setDriverCost] = useState(400)

    

    let productItemValues = useSelector(state => {
        return {
        productItemID : state.productItem.productItemID,
        productItemPrice : state.productItem.price,
          productItemName: state.productItem.productItemName,
          productImagePath:state.productItem.productImagePath
        }
    })
    
    let bookingValues = useSelector(state => {
        return {
        dates : state.booking.bDates,
        pickupStation: state.booking.pickupLocation,
        returnStation: state.booking.returnLocation,
        is_payment_online : state.booking.is_payment_online,
        reservationNo : state.booking.reservationNo
    }})

    let { advancedSearch } = useProductItemAttributeValueService()

    let { setPrice , setProductItemImagePath} = useProductItemActions()
    let { setis_payment_online_false } = useBookingActions()

    

    let {push} = useHistory()

    let onClickButtonHandler = () => {

        setisBooking(true)


        // push('/thankyou')

        const user_ID = JSON.parse(localStorage.getItem('_application_name_user_detail_')).person_ID

        let Data = {
            user_id: user_ID,
            vehicle_id:productItemValues.productItemID,
            pickup_location: bookingValues.pickupStation,
            return_location: bookingValues.returnStation,
            start_date: bookingValues.dates[0].length === 24 ? bookingValues.dates[0].slice(0,10) : GetDateFormate(bookingValues.dates[0]),
            end_date: bookingValues.dates[1].length === 24 ? bookingValues.dates[1].slice(0,10) : GetDateFormate(bookingValues.dates[1]),
            total_price: productItemValues.productItemPrice,
            is_payment_online: bookingValues.is_payment_online,
            id:bookingValues.reservationNo,
            vehicle_imagePath: productItemValues.productImagePath,
            vehicle_name: productItemValues.productItemName
        }

        console.log("Data" , Data)

        axios.post(`http://127.0.0.1:5000/updateBooking?id=${Data.id}&user_id=${Data.user_id}&vehicle_id=${Data.vehicle_id}&start_date=${Data.start_date}&end_date=${Data.end_date}&total_price=${Data.total_price}&pickup_location=${Data.pickup_location}&return_location=${Data.return_location}&is_payment_online=${Data.is_payment_online}&vehicle_imagePath=${Data.vehicle_imagePath}&vehicle_name=${Data.vehicle_name}`)
            .then((res) => {
                setTimeout(() => {
                    push('/thankyou')
                },2000)
            })
            .catch(err => console.log(err.message))

        
    }


    let checkBoxHandleChange = e => {
        const dcost = driverCost * totalDays
        if (!isNeedDriver) {
            
        setIsLoadingPrice(true)
        setTimeout(() => {
        setPrice(productItemValues.productItemPrice + dcost)
        setIsLoadingPrice(false)
        },1200)
        }
        else {
        setIsLoadingPrice(true)
        setTimeout(() => {
        setPrice(productItemValues.productItemPrice - dcost)
        setIsLoadingPrice(false)
        },1200)
        }
    
        setIsNeedDriver(e.target.checked)
    }

    useEffect(() => {

        localStorage.getItem('isMoneyPaidOnlineLineThrough')

        let d0 = Date.parse((bookingValues.dates[0]))
        let d1 = Date.parse((bookingValues.dates[1]))

        const dateDifference = d1 - d0
        const totalDays = dateDifference / (1000 * 3600 * 24)
        const days = totalDays === 1 ? totalDays + 1 : totalDays + 2
        setTotalDays(days)
        

        // const dat = new Date(bookingValues.dates[0])
        // console.log("date" , dat.getDate()+ dat.getMonth() + dat.getFullYear())
        //set values of attributes
        let searchGeneralInfo = {
            application_ID: 150,
            productitem_ID: productItemValues.productItemID,
            productattributecategory_ID: 13
        }

        advancedSearch(searchGeneralInfo).then(resData => {
            setIsLoadingPrice(false)
            let data = resData.filter(arr => arr.productattribute_ID.productattribute_NAME === 'New Price')
            setFirstPrice(data[0].productattribute_VALUE)
            setPrice(data[0].productattribute_VALUE * days)
        })
    }, [])

    useEffect(() => {
        localStorage.setItem('isMoneyPaidOnlineLineThrough' , isMoneyPaidOnlineLineThrough)
    },[isMoneyPaidOnlineLineThrough])

    return (
        <div>
            <hr style={{ backgroundColor: '#fd7014', height: '1px' }} />
            
        <Container style={{marginTop:'5rem'}}>
            <section style={{display: 'flex', justifyContent: 'center', alignItems:'center' , color:'#eeeeee' , marginBottom:'4rem'}}><h1>REVIEW & BOOK</h1></section>
            <Row>
        <Col sm={12} md={6}>
        <section className="fluid-container">
        <img
          src={`http://localhost:3335/${productItemValues.productImagePath}`}
          alt="Reserved Vehicale"
          className="img-fluid"
          style={{borderRadius:'5px'}}
        />
        <p className="small" style={{color:'#eeeeee'}}>*lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem </p>
        </section>
        </Col>
        <Col sm={12} md={6} className="FinalDataMargin">
        <div className=""  style={{ display: 'flex', justifyContent: 'center', alignItems:'center' , flexDirection:'column' , color:'#eeeeee' }}>
          <section className="">
          <h3 className="mb-5 text-left" style={{color:'#fd7014' , textTransform:'uppercase'}}>{productItemValues.productItemName}</h3>
          <p className="mb-3" style={{textAlign:'left' , fontSize:'1.2rem' , fontWeight:'bold' }}>Pickup Station : <span style={{fontWeight:'normal' , marginLeft:'1rem'}}>{` ${bookingValues.pickupStation}`}</span></p>
          <p className="mb-3" style={{textAlign:'left' , fontSize:'1.2rem' , fontWeight:'bold'}}>Return Station : <span style={{fontWeight:'normal' , marginLeft:'1rem'}}>{` ${bookingValues.returnStation}`}</span></p>
          
          <p className="mb-3" style={{textAlign:'left' , fontSize:'1.2rem' , fontWeight:'bold' }}>Pickup Date : <span style={{fontWeight:'normal' , marginLeft:'1rem'}}>{` ${bookingValues.dates[0].length === 24 ? bookingValues.dates[0].slice(0,10) : GetDateFormate(bookingValues.dates[0])}`}</span></p>
          <p className="mb-3" style={{textAlign:'left' , fontSize:'1.2rem' , fontWeight:'bold'}}>Return Date : <span style={{fontWeight:'normal' , marginLeft:'1rem'}}>{` ${bookingValues.dates[1].length === 24 ? bookingValues.dates[1].slice(0,10) : GetDateFormate(bookingValues.dates[1])}`}</span></p>
        
        

        <hr style={{backgroundColor:'#fd7014' , height:'1px' , marginTop:'2rem'}} />
        <section style={{marginTop:'2.5rem'}}>       
        {isPayLater ? (
            <div>
              <h6>YOUR SELECTION : {isLoading ? <CircularProgress size="1rem" style={{marginLeft:'1rem'}} />: ' PAY LATER'}</h6>
              <p
                className="small"
                style={{ textAlign: "left", color: '#fd7014' , cursor:'pointer' }}
              >
                <a className="payclass" style={{borderBottom:'1px solid #fd7014'}}
                  onClick={() => {
                    setisPayLater(!isPayLater) 
                    setisLoading(true)
                    setisMoneyPaidOnline(true)
                    setTimeout(() => {
                        setisLoading(false)
                    },1200)
                }}
                >
                  Or Pay Online
                </a>
              </p>
            </div>
          ) : (
            <div>
              <h6>YOUR SELECTION : {isLoading ? <CircularProgress size="1rem" style={{marginLeft:'1rem'}} />: ' PAY ONLINE'}</h6>
              <p
                className="small"
                style={{ textAlign: "left", color: '#fd7014' , cursor:'pointer' }}
              >
                <a
                  className="payclass" style={{borderBottom:'1px solid #fd7014'}}
                  onClick={() => {
                    setisPayLater(!isPayLater) 
                    setisLoading(true)
                    setisMoneyPaidOnline(false)
                    // setisMoneyPaidOnlineLineThrough(false)
                    setTimeout(() => {
                        setisLoading(false)
                    },1200)
                }}
                >
                  Or Pay Later
                </a>
              </p>
              {!isLoading && <Payment isMoneyPaidOnline={isMoneyPaidOnline} setisMoneyPaidOnline={setisMoneyPaidOnline} setisMoneyPaidOnlineLineThrough={setisMoneyPaidOnlineLineThrough} />}
            </div>
          )}
          {/* <FormControlLabel
        style={{color:'#eeeeee' , marginTop:'1.5rem'}}
        control={<Checkbox color="primary" checked={isNeedDriver} onChange={checkBoxHandleChange} name="isNeedDriver" />}
        label="A Driver Costs 400 Rs / Day"
      /> */}
                    </section>        
    <hr style={{backgroundColor:'#fd7014' , height:'1px' , marginTop:'2.8rem' , minWidth:'22.5rem'}} />


    
    

    </section>
        </div>
            </Col>
            <Col sm={12} md={6} style={{color:'#eeeeee'}}>
            <div className="container small FinalDataMargin">
                <p>I acknowledge that I am booking a prepaid tariff, where the total rental price listed above is immediately charged to the credit card provided. I accept the fees associated with this tariff in the case of</p>
                <ul>
                    <li>Rebooking (processing fee, incl. fees and extras),</li>
                    <li>Cancellation (costs will be retained for the first three days of rental, including fees and extras, or, if the rental period is less than three days, the full rental fee, including the fees and extras, will be retained.) or</li>
                    <li>Non-collection of the vehicle (no refund of any of the total rental price).</li>
                </ul>
                <p>By clicking the button, I confirm that I’ve read and accepted the rental information and the terms and conditions</p>
            </div>
            </Col>
            <Col sm={12} md={6}>
            <section className="" style={{margin:'5.5rem' , color:'#eeeeee'}}>
            <h6>{` Renting for `}<span style={{color: '#fd7014'}}>{totalDays}</span>{` Days`}</h6>
            <p className="mb-3 mt-2" style={{color:'#eeeeee' ,textAlign:'left' , fontSize:'1.2rem' }}>Total Cost : <span style={{color: '#fd7014' , marginLeft:'1rem' , marginTop:'.5rem'}}>{isLoadingPrice ? <CircularProgress size="1.5rem" /> : <> <span style={{fontSize:'.8rem'}}>{`${firstPrice} * ${totalDays} `}{isNeedDriver ? <>{` + ${driverCost} * ${totalDays}`}</> : '' }</span><span>{` = `}</span><span className={bookingValues.is_payment_online ? 'LineThroughOnPrice' : 'NotLineThroughOnPrice'}>{`${productItemValues.productItemPrice}`}</span> Rs</>}</span></p>
    <p className="small" style={{marginTop:'-1rem' , textAlign:'left'}}>Tax included</p>
    <Button disabled={isMoneyPaidOnline} style={{color:'#eeeeee' , marginBottom:'1rem'}} fullWidth color="primary" variant="contained" onClick={onClickButtonHandler}>{isBooking ? <CircularProgress style={{color:'#eeeeee'}} size="1.6rem" /> : "BOOK NOW"}</Button>
    </section>
            </Col>
            </Row>
        </Container>
        </div>
    )
}