import React  , {useState} from 'react'
import { Link } from 'react-router-dom'

import MainBookingLayout from '../../mainBookingLayout'

// //redux
import useUtilActions from '../../../../actions/utilActions'

// //productItem
import useProductItemService from '../../../../services/productServices/productItemService'
// import useProductService from '../../../services/productServices/productService'

// vehicale Item Grid
import VehicaleItemGrid from '../vehicaleItemGrid'

export default function Showallvehicles(props) {
    const [vehicaledata, setvehicaledata] = useState([])
    const [isLoading , setIsLoading] = useState(true)

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
          setIsLoading(false)
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
          <VehicaleItemGrid isLoading={isLoading} vehicaledata={vehicaledata} />      
          </div>
          </div>
      </MainBookingLayout>
    );
}

