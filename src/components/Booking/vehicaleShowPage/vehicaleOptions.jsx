import React from 'react';
import {Button , Typography} from '@material-ui/core'
import {Link} from 'react-router-dom'
import '../../util/main.css'



export default ()=>{
    return(
        <div className="vehicaleOptions-component-css">
            <div className="vehicaleoptions-flex">
            <Typography variant="h4" className="font-weight-bolder p-3">Vehicale Name</Typography>
            <h4 className="font-weight-bolder pt-3 pb-0">Total Price</h4>
            <h6 className="font-weight-bolder pb-3 pt-1">2000 Rs/day</h6>
            <Link to="/bookingform"><Button className="p-2 pr-5 pl-5 rounded-0" variant="contained" color="primary">CONTINUE</Button></Link>
            </div>
        </div>
    )
}