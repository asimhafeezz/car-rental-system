import React from 'react'
import {Button} from '@material-ui/core'

import '../../util/main.css'



export default ()=>(
    <div className="homepage-locationimage-css" data-aos="fade-up" data-aos-duration="1500">
    <div className='b'>
    <div className="boxx">
        <img className="img-fluid" src="/vehicaleImagesStatic/locations.jpg" alt="Front Pic" />
        <div className="textt" data-aos="fade-up" data-aos-duration="1500">
            <h1>OUR LOCATIONS</h1>
        </div>
        <div className="locationsbtn">
        <Button className='rounded-0' size="large" variant="contained" color="primary" >FIND US</Button>
            </div>
    </div>
    </div>
    </div>
)