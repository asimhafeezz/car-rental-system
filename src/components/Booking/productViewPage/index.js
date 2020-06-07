import React from 'react'

import ImageSlider from './imgView/imgSlider'
import HorizontalSlider from './imgView/HorizontalSlider'
//overview
import FeatureIcons from './overview/featureIcons'
//detail
import MinorDetails from './productMinorDetails/minorDetails'

//detail description
import Description from './productFullDetails/description'
//layout
import MainBookingLayout from '../mainBookingLayout'

//redux
import useUtilActions from '../../../actions/utilActions'

import '../../util/main.css'

export default () => {
    let { setBookingStepValue } = useUtilActions()
    
    React.useEffect(() => {
        setBookingStepValue("bookingStep2")
    },[])
    return (
        <MainBookingLayout>
            <section className="container-fluid">
        <div className="row">
            <section className="col-xs-12 col-sm-12 col-md-8">
                <ImageSlider />
                {/* <HorizontalSlider /> */}
            </section>
            
            <section className="col-xs-12 col-sm-12 col-md-4">
                <MinorDetails />
            </section>
            </div>


            <div className="row">
            <section className="col-xs-12 col-sm-12 col-md-8 col-lg-8">
                <FeatureIcons />
                <Description />
                <hr style={{height:'.5rem'}} />
            </section>
            
                </div>
                </section>
        </MainBookingLayout>
    )
}