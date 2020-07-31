import React from 'react'

import BarLayout from '../mainBookingLayout'
import FinalData from './finalData'

//redux
import useUtilActions from '../../../actions/utilActions'

export default () => {

    let { setBookingStepValue } = useUtilActions()
    
    React.useEffect(() => {
        setBookingStepValue("bookingStep3")
    },[])

    return (
        <BarLayout>
            <FinalData />
        </BarLayout>
    )
}