import React  , {useState} from 'react'
import { Link } from 'react-router-dom'

import MainBookingLayout from '../../mainBookingLayout'

// //redux
import useUtilActions from '../../../../actions/utilActions'
import { useSelector } from 'react-redux'

// //productItem
import useProductItemService from '../../../../services/productServices/productItemService'
// import useProductService from '../../../services/productServices/productService'
import useProductItemAttributeValueService from '../../../../services/productServices/productItemAttributeValue'

// vehicale Item Grid
import VehicaleItemGrid from '../vehicaleItemGrid'

export default function Showallvehicles(props) {
    const [vehicaledata, setvehicaledata] = useState([])
    const [isLoading , setIsLoading] = useState(true)
  const [noItemFound, setnoItemFound] = useState(false)
  
    let { setBookingStepValue } = useUtilActions()
    
    //productitemservice
    let { advancedSearch } = useProductItemService()
  let uPIAVS = useProductItemAttributeValueService()
  
  //redux booking value
  const pickupLocation = useSelector(state => state.booking.pickupLocation)

      React.useEffect(() => {
        setIsLoading(true)
        setnoItemFound(false)

        setBookingStepValue("bookingStep1")
        console.log(props.match.params.productid)
  
        let search = {
          product_ID: props.match.params.productid,
          application_ID: 150
        }
  
        //product item
      uPIAVS.advancedSearch(search).then(resData => {
        setIsLoading(false)
        console.log("data spec", resData)
        var data = []
        data = resData.filter(arr => arr.productattribute_ID.productattribute_NAME === 'Current Location' && arr.productattribute_VALUE === pickupLocation)
        console.log("data" , data)
        if (data == []) {
          console.log("here")
          setnoItemFound(true)
        }
        else {
          console.log("data inside",data)
          setvehicaledata(data)
        }
      })
        
      },[pickupLocation])
      

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
          <VehicaleItemGrid isLoading={isLoading} vehicaledata={vehicaledata} />      
          </div>
          </div>
      </MainBookingLayout>
    );
}

