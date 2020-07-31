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

export default ({ noItemFound, isLoading, vehicaledata, attributes, setvehicalePrice, vehicalePrice }) => {
  
  React.useEffect(() => {
    console.log('noitem' , noItemFound)
  },[])

    return ( isLoading ? <section style={center}><Spinner /><h5>Loading...</h5></section> : (
      noItemFound ? <section style={center}><h5>No Item Found!</h5></section> :(
        <div style={{ display: "flex",  flexWrap:'wrap' , justifyContent:'center'}} data-aos="fade-up" data-aos-duration="1500">
        {vehicaledata.map(items => {
        return (
          items.productitem_ID.isactive === 'Y' && <>
            <VehicaleItemCard key={items.productitem_ID.productitem_ID} vehicalePrice={items.productattribute_VALUE} productitemid={items.productitem_ID.productitem_ID} productitem_NAME={items.productitem_ID.productitem_NAME} productitem_DESC={items.productitem_ID.productitem_DESC} imgSrc={items.vpic} price={items.price} />
            {/* <h1>price: {final_price[0]}</h1> */}
            </>
        );
      })}
    </div>)
      ))
}
