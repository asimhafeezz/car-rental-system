import React , {useState} from 'react'

//vehicaleItem card
import VehicaleItemCard from './vehicaleItemCard'
//spinner
import Spinner from '../../util/spinner'

//css
let center = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '20rem',
    flexDirection:'column'
}

export default ({ isLoading, vehicaledata, attributes , setvehicalePrice , vehicalePrice}) => {
  
  // let [price , setPrice] = useState({})
  var price = {}

    return ( isLoading ? <section style={center}><Spinner /><h5>Loading...</h5></section> : (
        <div style={{ display: "flex",  flexWrap:'wrap' , justifyContent:'center'}} data-aos="fade-up" data-aos-duration="1500">
        {vehicaledata.map(items => {
        const result_price = attributes.filter(arr => arr.productitem_ID.productitem_ID === items.productitem_ID)
        // console.log("price" , result_price)
        const final_price = result_price.filter(arr => arr.productattribute_ID.productattribute_NAME === 'New Price')
          console.log("final price", final_price[0])
          price = {
            ...final_price[0]
          }
          console.log("price" , price)
        // setPrice(final_price[0])
        // setvehicalePrice(final_price)
        // setProductItemPrice(result_price.productattribute_ID.productattribute_NAME)
        return (
          items.isactive === 'Y' && <>
            <VehicaleItemCard key={items.product_ID} vehicalePrice={price} productitemid={items.productitem_ID} productitem_NAME={items.productitem_NAME} productitem_DESC={items.productitem_DESC} imgSrc={items.vpic} price={items.price} />
            {/* <h1>price: {final_price[0]}</h1> */}
            </>
        );
      })}
    </div>
      ))
}
