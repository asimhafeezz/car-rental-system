import React  from 'react'
import { Link } from 'react-router-dom'

import MainBookingLayout from '../Booking/mainBookingLayout'
import CheckIcon from '@material-ui/icons/Check';

//redux
import useUtilActions from '../../actions/utilActions'

//productItem
import useProductItemService from '../../services/productServices/productItemService'


import '../util/main.css'

export default function Showallvehicles(props) {
  const [vehicaledata , setvehicaledata] = React.useState([])

  let { setBookingStepValue } = useUtilActions()
  
  //productitemservice
  let { advancedSearch } = useProductItemService()
    
    React.useEffect(() => {
      setBookingStepValue("bookingStep1")
      console.log(props.match.params.productid)

      let search = {
        product_ID: props.match.params.productid,
        application_ID: 150
      }

      advancedSearch(search).then(resdata => {
        console.log(resdata)
        setvehicaledata(resdata)
        // console.log(vehicaledata)
      })
      
    },[])
    
    
  let style = {
    backgroundColor: "#fd7014",
    paddingBottom: "2%",
    paddingTop: "2%"
}


  return (
      <MainBookingLayout>
      <div
        className="vehicales"
        style={style}>
        <div>
          <h3
            className="pb-2"
            style={{ display: "flex", justifyContent: "center" , fontWeight:'bold'}}
          >
            AVAILABLE VEHICALES
          </h3>
          <div style={{ display: "flex",  flexWrap:'wrap' , justifyContent:'center'}} data-aos="fade-up" data-aos-duration="1500">
            {vehicaledata.map(vitems => {
              return (
                <div key={vitems.product_ID} style={{ display: "flex",  flexWrap:'wrap' , margin:'2rem'}} className="onHoverVehicaleEffectDiv">
                  <Link to="/vehicale" style={{textDecoration:'none' , color:'black'}}>
                    <div style={{border:'0' , backgroundColor:'transparent'}}>
                    <div style={{width:'17rem'}}><h5 style={{padding:'.3rem' , backgroundColor:'#202021' , color:'white' , letterSpacing:'.1rem' , textTransform: 'uppercase' }}>{vitems.productitem_NAME.length > 15 ? vitems.productitem_NAME.slice(0,15).concat('...') : vitems.productitem_NAME}</h5></div>
                      <img
                      style={{height:'14rem' , width:'17rem'}}
                      className="onHoverVehicaleEffectImage"
                        src={vitems.vpic}
                        alt={vitems.valt}
                      />
                      <div style={{backgroundColor:'#202021' , padding:'.4rem .1rem' , color:'white'}}>
                        <p style={{marginTop:'rem'}}><CheckIcon className="mr-2 pb-1" />incl. unlimited miles</p>
                        <h6 style={{fontSize:'1.2rem' , margin:'0 .3rem' , letterSpacing:'rem'}}>{vitems.price}</h6>
                      </div>
                    </div>
                    </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      </MainBookingLayout>
    );
}

