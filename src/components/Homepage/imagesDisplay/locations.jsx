import React from 'react'
import {Button} from '@material-ui/core'

import {Link} from 'react-router-dom'



export default () => {

    return (
    <div className="homepage-locationimage-css" data-aos="fade-up" data-aos-duration="1500">
    <div className='b'>
    <div className="boxx">
        <img className="img-fluid" src="/vehicaleImagesStatic/location.jpg" alt="Front Pic" />
        {/* <div className="textt" data-aos="fade-up" data-aos-duration="1500">
            <h1>OUR LOCATIONS</h1>
            <h1 style={{paddingRight:'4rem'}}>IN PAKISTAN</h1>
        </div> */}
                
        <div className="locationsbtn">
        <Link to="/franchises" style={{textDecoration:'none' , outline:'none'}}><Button size="large" variant="contained" color="primary" >FIND US</Button></Link>
            </div>
    </div>
    </div>
    </div>
)}