import React from "react"

import {Button} from '@material-ui/core'

import '../../util/main.css'



export default  ()=>
(
    <div className="homepage-driverimage-css">
<div className="driverbox">
        <img  className="img-fluid" src="/vehicaleImagesStatic/drivercar.jpg" alt="Driver Image" />
        <div >
            <h1 className="drivertext">Start earning with our Service today</h1>
            {/* <p className="drivertextp"></p> */}
            </div>
        <div className="driverbtn">
        <Button className='rounded-0' size="large" variant="contained" color="primary" >Become a Captain</Button>
        </div>
    </div>
    </div>
  )