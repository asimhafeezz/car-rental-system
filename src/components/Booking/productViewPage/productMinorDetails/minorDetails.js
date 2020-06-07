import React from 'react'
//material ui
import { Button } from '@material-ui/core'

import '../../../util/main.css'
import { Link } from 'react-router-dom'
//css
let baseStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    color: '#eeeeee'
}
export default () => {
    return (
        <div class="rightDivPaddingStyle">
        <div style={baseStyle}>
            <h6 className="pt-3" style={{color:'#fd7014' , fontSize:'.9rem'}}>BRAND NEW - IN STOCK</h6>
                <h1 className="pb-4" style={{ letterSpacing: '.3px' }}>Honda Civiv</h1>
            {/* <hr style={{height:'.5rem'}} /> */}
            <h5 style={{color:'gray' , fontSize:'1rem'}} className="pb-2"><span style={{color:'#eeeeee'}}>Modal:</span> 2016</h5>
            <h5 style={{color:'gray', fontSize:'1.2rem'}} className="pb-3"><span style={{color:'#eeeeee'}}>Odometer:</span> 50 km</h5>
            <h5 style={{color:'gray', fontSize:'1.2rem'}} className="pb-3"><span style={{color:'#eeeeee'}}>Color:</span> Red</h5>
            {/* <hr style={{marginBottom:'1rem' , height:'.5rem' , paddingTop:'6rem'}} /> */}
            <div className="pb-4 underRightDivPadding" style={{display:'flex'}}><h3>price:</h3><h2  style={{color:'#f22011' , marginLeft:'.5rem'}}>37$ /-day</h2></div>
            <p style={{letterSpacing:'1px' , fontSize:'.9rem'}}>Available for Quick Booking</p>
            <Link to="/bookingform" style={{textDecoration:'none'}}><Button color='primary' variant="contained" fullWidth className="rounded-0" size="large">Continue</Button></Link>
            </div>
        </div>
    )
}