import React, { useState }  from 'react'

import MainBookingLayout from '../mainBookingLayout'

//redux
import useUtilActions from '../../../actions/utilActions'

// //productItem
import useProductItemService from '../../../services/productServices/productItemService'
import useProductService from '../../../services/productServices/productService'
import useProductItemAttributeValueService from '../../../services/productServices/productItemAttributeValue'

//filter Vehicles 
import FilterVehicle from './filter2'


//vehicale Item Grid
import VehicaleItemGrid from './vehicaleItemGrid'

export default function Showallvehicles(props) {

  //spinner toggle
  const [isLoading , setIsLoading] = useState(true)

  const [vehicaledata, setvehicaledata] = useState([])
  const [vehicalePrice, setvehicalePrice] = useState({})

  const [vehicleTypeList, setvehicleTypeList] = useState([])
  const [vehicle, setvehicle] = useState('');
  const [attributes, setAttributes] = useState([])
  
  let { setBookingStepValue } = useUtilActions()
  
  //productitemservice
  // let { advancedsearch } = useProductService()
  let { advancedSearch } = useProductItemService()
  let uPIAVS = useProductItemAttributeValueService()
    
    React.useEffect(() => {
      setBookingStepValue("bookingStep1")
      console.log(props.match.params.productid)

      let search = {
        product_ID: props.match.params.productid,
        application_ID: 150
      }

      //product item
    advancedSearch(search).then(resData => {
      setvehicaledata(resData)
      // setIsLoading(false)
    })
      
      //set values of attributes
      let searchGeneralInfo = {
        application_ID: 150,
        productitem_ID:props.match.params.productid
    }

    uPIAVS.advancedSearch(searchGeneralInfo).then(resData => {
      setIsLoading(false)
      setAttributes(resData)
      const attri = attributes.filter(arr => arr.productattribute_ID.productattribute_NAME === 'Current Location' && arr.productattribute_Value === 'lahore')
      console.log("attri" , attri)
    })
      
      
      
    },[])

    React.useEffect(() => {
      setIsLoading(true)

      if (vehicle === 'Car') {
        let search = {
          application_ID: 150,
          product_ID: 1
        }
        //product item
        advancedSearch(search).then(resData => {
          setvehicaledata(resData)
          setIsLoading(false)
        })
      }
      else if (vehicle === 'Jeep') {
        let search = {
          application_ID: 150,
          product_ID: 35
        }
        //product item
        advancedSearch(search).then(resData => {
          setvehicaledata(resData)
          setIsLoading(false)
        })
      }
      else if (vehicle === 'Pickup') {
        let search = {
          application_ID: 150,
          product_ID: 34
        }
        //product item
        advancedSearch(search).then(resData => {
          setvehicaledata(resData)
          setIsLoading(false)
        })
      }
      else if (vehicle === 'all') {
        let search = {
          application_ID: 150
        }
        //product item
        advancedSearch(search).then(resData => {
          setvehicaledata(resData)
          setIsLoading(false)
        })
      }
  
  },[vehicle])
    
    
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
          
          <VehicaleItemGrid isLoading={isLoading} vehicalePrice={vehicalePrice} setvehicalePrice={setvehicalePrice} attributes={attributes} vehicaledata={vehicaledata} />

          
        </div>
      </div>
      </MainBookingLayout>
    );
}

