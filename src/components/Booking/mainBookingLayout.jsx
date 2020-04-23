import React from 'react'
import {useLocation} from 'react-router-dom'

import {
    Button
} from '@material-ui/core'

import '../util/main.css'

export default ({ children }) => {

    const location = useLocation()




    return(
    <div className="mainBookingLayout">
        <div className="layoutbar">
        <Button className={`firstItem ${location.pathname === '/availablevehicales'? `active` :''}`} disabled><a>1. SELECT VEHICALE</a></Button>
        <Button className={`secondItem ${location.pathname === '/vehicale'? `active` :''}`} disabled><a>2. VEHICALE DETAILS</a></Button>
        <Button className={`secondItem ${location.pathname === '/bookingform'? `active` :''}`} disabled><a>3. BOOKING FORM</a></Button>
        </div>

        {children}

    </div>
    )
}