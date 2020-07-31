import React from 'react'
import {useLocation} from 'react-router-dom'

import {
    Button
} from '@material-ui/core'

//redux
import {useSelector} from 'react-redux'

//booking bar
import Bookingbar from './bookingbarVehiclePage'

export default ({ children }) => {

    const location = useLocation()

    let bookingStepValue = useSelector(state => state.util.bookingStepValue)


    return(
        <>
        {bookingStepValue === 'bookingStep1' && <><Bookingbar /><hr style={{backgroundColor:'#fd7014' , height:'1px'}} /></>}
    <div className="mainBookingLayout">
        <div className="layoutbar">
        <Button className={`firstItem ${bookingStepValue === 'bookingStep1'? `active` :''}`} disabled><span className={`${bookingStepValue === 'bookingStep1'? `digit` :'nondigit'}`}>1</span><span className={`${bookingStepValue === 'bookingStep1'? `active` :'nonactive'}`}>SELECT VEHICALE</span></Button>
        <Button className={`secondItem ${bookingStepValue === 'bookingStep2'? `active` :''}`} disabled><span className={`${bookingStepValue === 'bookingStep2'? `digit` :'nondigit'}`}>2</span><span className={`${bookingStepValue === 'bookingStep2'? `active` :'nonactive'}`}>VEHICALE DETAILS</span></Button>
        <Button className={`secondItem ${bookingStepValue === 'bookingStep3'? `active` :''}`} disabled><span className={`${bookingStepValue === 'bookingStep3'? `digit` :'nondigit'}`}>3</span><span className={`${bookingStepValue === 'bookingStep3'? `active` :'nonactive'}`}>BOOKING FORM</span></Button>
        </div>
        

        {children}

    </div>
    </>
    )
}