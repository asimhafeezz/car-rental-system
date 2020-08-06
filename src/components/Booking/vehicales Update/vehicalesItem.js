import React, { useState }  from 'react'

import MainBookingLayout from '../mainBookingLayout'

//redux
import useUtilActions from '../../../actions/utilActions'
import { useSelector } from 'react-redux'
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
  const [filteredProductItem, setFilteredProductItem] = useState([])
  const [noItemFound, setnoItemFound] = useState(false)
  
  //redux booking value
  const pickupLocation = useSelector(state => state.booking.pickupLocation)

  let { setBookingStepValue } = useUtilActions()
  
  //productitemservice
  // let { advancedsearch } = useProductService()
  let { advancedSearch } = useProductItemService()
  let uPIAVS = useProductItemAttributeValueService()
  

  React.useEffect(() => {
    setBookingStepValue("bookingStep1")
      setIsLoading(true)
      setnoItemFound(false)

    if (vehicle === 'Car') {
      let search = {
        application_ID: 150,
        product_ID: 1
      }
      //product item
      uPIAVS.advancedSearch(search).then(resData => {
        setIsLoading(false)
        if (resData === undefined || resData.length == 0) {
          setnoItemFound(true)
        }
        else {
          setFilteredProductItem(resData.filter(arr => arr.productattribute_ID.productattribute_NAME === 'Current Location' && arr.productattribute_VALUE === pickupLocation))
        }
      })
    }
    else if (vehicle === 'Jeep') {
      let search = {
        application_ID: 150,
        product_ID: 35
      }
      //product item
      uPIAVS.advancedSearch(search).then(resData => {
        setIsLoading(false)
        console.log("jeep data",resData)
        if (resData === undefined || resData.length == 0) {
          setnoItemFound(true)
        }
        else {
          setFilteredProductItem(resData.filter(arr => arr.productattribute_ID.productattribute_NAME === 'Current Location' && arr.productattribute_VALUE === pickupLocation))
        }
      })
    }
    else if (vehicle === 'Pickup') {
      let search = {
        application_ID: 150,
        product_ID: 34
      }
      //product item
      uPIAVS.advancedSearch(search).then(resData => {
        console.log("jeep data",resData)
        setIsLoading(false)
        if (resData === undefined || resData.length == 0) {
          setnoItemFound(true)
        }
        else {
          setFilteredProductItem(resData.filter(arr => arr.productattribute_ID.productattribute_NAME === 'Current Location' && arr.productattribute_VALUE === pickupLocation))
        }
      })
    }
    else if (vehicle === '') {
      let search = {
        application_ID: 150
      }
      //product item
      uPIAVS.advancedSearch(search).then(resData => {
        setIsLoading(false)
        if (resData.length === 0) {
          setnoItemFound(true)
        }
        else {
          setFilteredProductItem(resData.filter(arr => arr.productattribute_ID.productattribute_NAME === 'Current Location' && arr.productattribute_VALUE === pickupLocation))
        }
      })
    }
      
      
      
    },[pickupLocation , vehicle])

    
    
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
          
          <VehicaleItemGrid noItemFound={noItemFound} isLoading={isLoading} vehicalePrice={vehicalePrice} setvehicalePrice={setvehicalePrice} attributes={attributes} vehicaledata={filteredProductItem} />

          
        </div>
      </div>
      </MainBookingLayout>
    );
}

