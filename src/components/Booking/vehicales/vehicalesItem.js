import React  from 'react'
import { Link } from 'react-router-dom'

import MainBookingLayout from '../mainBookingLayout'
import CheckIcon from '@material-ui/icons/Check';

// //redux
// import useUtilActions from '../../actions/utilActions'

// //productItem
// import useProductItemService from '../../services/productServices/productItemService'
// import useProductService from '../../../services/productServices/productService'

//filter Vehicles 
import FilterVehicle from './filter2'

export default function Showallvehicles(props) {
  const [vehicaledata, setvehicaledata] = React.useState([
    {product_ID:'1' , productitem_NAME:'Hondai' , vpic:'vehicaleImagesStatic/jeep.jpg' , price:'2000$ -/Day'},
    {product_ID:'2' , productitem_NAME:'Toyota' , vpic:'vehicaleImagesStatic/jeep.jpg' , price:'2000$ -/Day'},
    {product_ID:'3' , productitem_NAME:'Audi' , vpic:'vehicaleImagesStatic/jeep.jpg' , price:'2000$ -/Day'},
    {product_ID:'4' , productitem_NAME:'Hondai' , vpic:'vehicaleImagesStatic/jeep.jpg' , price:'2000$ -/Day'},
    {product_ID:'5' , productitem_NAME:'Mercedes' , vpic:'vehicaleImagesStatic/jeep.jpg' , price:'2000$ -/Day'},
    {product_ID:'6' , productitem_NAME:'Hondai' , vpic:'vehicaleImagesStatic/jeep.jpg' , price:'2000$ -/Day'},
    {product_ID:'7' , productitem_NAME:'Hundus' , vpic:'vehicaleImagesStatic/jeep.jpg' , price:'2000$ -/Day'},
    {product_ID:'8' , productitem_NAME:'Hondai' , vpic:'vehicaleImagesStatic/jeep.jpg' , price:'2000$ -/Day'},
    {product_ID:'9' , productitem_NAME:'Pickup Road' , vpic:'vehicaleImagesStatic/jeep.jpg' , price:'2000$ -/Day'},
    {product_ID:'10' , productitem_NAME:'Hondai' , vpic:'vehicaleImagesStatic/jeep.jpg' , price:'2000$ -/Day'},
  ])

  const [vehicleTypeList, setvehicleTypeList] = React.useState([])
  const [vehicle, setvehicle] = React.useState('');

  // let { setBookingStepValue } = useUtilActions()
  
  // //productitemservice
  // let { advancedsearch } = useProductService()
  // let { advancedSearch } = useProductItemService()
    
    // React.useEffect(() => {
    //   setBookingStepValue("bookingStep1")
    //   console.log(props.match.params.productid)

    //   let search = {
    //     product_ID: props.match.params.productid,
    //     application_ID: 150
    //   }

    //   advancedSearch(search).then(resdata => {
    //     console.log(resdata)
    //     setvehicaledata(resdata)
    //     // console.log(vehicaledata)
    //   })
      
    // },[])

  //   React.useEffect(() => {
  //     if (vehicle === 'Car') {
  //       let search = {
  //         application_ID: 150,
  //         product_ID: 1
  //       }
  //       //product item
  //       advancedSearch(search).then(resData => {
  //         setvehicaledata(resData)
  //       })
  //     }
  //     else if (vehicle === 'Jeep') {
  //       let search = {
  //         application_ID: 150,
  //         product_ID: 34
  //       }
  //       //product item
  //       advancedSearch(search).then(resData => {
  //         setvehicaledata(resData)
  //       })
  //     }
  //     else if (vehicle === 'all') {
  //       let search = {
  //         application_ID: 150
  //       }
  //       //product item
  //       advancedSearch(search).then(resData => {
  //         setvehicaledata(resData)
  //       })
  //     }
  
  // },[vehicle])
    
    
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
          
          <FilterVehicle vehicle={vehicle} vehicleTypeList={vehicleTypeList} setvehicle={setvehicle} />
          
          <div style={{ display: "flex",  flexWrap:'wrap' , justifyContent:'center'}} data-aos="fade-up" data-aos-duration="1500">
            {vehicaledata.map(vitems => {
              return (
                <div key={vitems.product_ID} style={{ display: "flex",  flexWrap:'wrap' , margin:'1.5rem 1.5rem 2.5rem 1.5rem'}} className="onHoverVehicaleEffectDiv">
                  <Link to="/vehicale" style={{textDecoration:'none' , color:'black'}}>
                    <div style={{border:'0' , backgroundColor:'#202021' , borderRadius:'.5rem'}}>
                    <div style={{width:'18rem'}} className="vehicleNameDiv" ><h5 style={{padding:'.5rem' , color:'white' , letterSpacing:'.1rem' , textTransform: 'uppercase' , margin:'0px' , display: "flex", justifyContent:'center' }}>{vitems.productitem_NAME.length > 15 ? vitems.productitem_NAME.slice(0,15).concat('...') : vitems.productitem_NAME}</h5></div>
                      <img
                      style={{height:'14rem' , width:'17rem' , margin:'.5rem' , borderRadius:'.5rem'}}
                      className="onHoverVehicaleEffectImage"
                        src={vitems.vpic}
                        alt={vitems.valt}
                      />
                      <div style={{padding:'.4rem .1rem' , color:'white' , textAlign:'center'}}>
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

