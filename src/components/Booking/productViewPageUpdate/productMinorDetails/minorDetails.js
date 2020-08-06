import React from 'react'
//material ui
import { Button } from '@material-ui/core'

import '../../../util/main.css'
import { useHistory } from 'react-router-dom'

//redux
import {useSelector} from 'react-redux'

//css
let baseStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    color: '#eeeeee'
}
export default ({ attributes, isLoading }) => {
    
    let { push } = useHistory()

    let productItemName = useSelector(state => state.productItem.productItemName)
    

    let bookingStatus = useSelector(state => state.booking.bookingStatus)


    let onButtonClickHandler = () => {
        // if (bookingStatus === 'updating') {
            
        // }
        push('/updateBookingForm')

    }

    return (
        <div class="rightDivPaddingStyle">
        <div style={baseStyle}>
            <h6 className="pt-3" style={{color:'#fd7014' , fontSize:'.9rem'}}>BRAND NEW - IN STOCK</h6>
            <h1 className="pb-4" style={{ letterSpacing: '.3px' , textTransform:'uppercase'}}>{productItemName}</h1>
            {
                    attributes.map(item => {
                        return <div key={item.productitemattributevalue_ID}>
                            {item.productattribute_ID.productattribute_NAME === 'Model Year' && <h5 style={{color:'gray' , fontSize:'1rem'}} className="pb-2"><span style={{color:'#eeeeee'}}>Modal:</span> {item.productattributevalue_ID.productattribute_VALUE}</h5>}
                            {item.productattribute_ID.productattribute_NAME === 'Current Mileage' && <h5 style={{color:'gray', fontSize:'1.2rem'}} className="pb-3"><span style={{color:'#eeeeee'}}>Current Mileage:</span> {item.productattribute_VALUE}</h5>}
                            {item.productattribute_ID.productattribute_NAME === 'Color' && <h5 style={{ color: 'gray', fontSize: '1.2rem' }} className="pb-3"><span style={{ color: '#eeeeee' }}>Color:</span> {item.productattribute_VALUE}</h5>}
                            {item.productattribute_ID.productattribute_NAME === 'New Price' && <div className="pb-4 underRightDivPadding" style={{display:'flex'}}><h3>price:</h3><h2  style={{color:'#fd7014' , marginLeft:'.5rem'}}>{item.productattribute_VALUE}Rs /-day</h2></div>}
                            </div>
                })
            }
            
            {/* <hr style={{height:'.5rem'}} /> */}
            {/* <h5 style={{color:'gray' , fontSize:'1rem'}} className="pb-2"><span style={{color:'#eeeeee'}}>Modal:</span> 2016</h5>
            <h5 style={{color:'gray', fontSize:'1.2rem'}} className="pb-3"><span style={{color:'#eeeeee'}}>Current Mileage:</span> 50 km</h5>
            <h5 style={{color:'gray', fontSize:'1.2rem'}} className="pb-3"><span style={{color:'#eeeeee'}}>Color:</span> Red</h5> */}
            {/* <hr style={{marginBottom:'1rem' , height:'.5rem' , paddingTop:'6rem'}} /> */}
            
            <p style={{letterSpacing:'1px' , fontSize:'.9rem'}}>Available for Quick Booking</p>
            <Button color='primary' variant="contained" fullWidth size="large" onClick={onButtonClickHandler}>Continue</Button>
            </div>
        </div>
    )
}