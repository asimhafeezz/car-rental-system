import React , {useState} from 'react'

import ImageSlider from './imgView/imgSlider'
//overview
import FeatureIcons from './overview/icons'
//detail
import MinorDetails from './productMinorDetails/minorDetails'

//detail description
import Description from './productFullDetails/description'
//layout
import MainBookingLayout from '../mainBookingLayout'

//redux
import useUtilActions from '../../../actions/utilActions'
import useProductItemActions from '../../../actions/productItemActions'

//productitem arrtibute valuse service
import useProductItemAttributeValueService from '../../../services/productServices/productItemAttributeValue'

//spinner
import Spinner from '../../util/spinner'

//css
let centerSpinner = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '33rem',
    flexDirection: 'column',
    color:'#eeeeee'
}

export default (props) => {
    let { setBookingStepValue } = useUtilActions()
    let { setProductItemID } = useProductItemActions()

    let { advancedSearch } = useProductItemAttributeValueService()

    const [attributes , setAttributes] = useState([])
    const [isLoading , setIsLoading] = useState(true)
    
    React.useEffect(() => {
        setBookingStepValue("bookingStep2")
        setProductItemID(props.match.params.vehicaleid)
        
        //set values of attributes
        let searchGeneralInfo = {
            application_ID: 150,
            productitem_ID:props.match.params.vehicaleid
        }

        advancedSearch(searchGeneralInfo).then(resData => {
            console.log("General Info", resData , "car id " , props.match.params.vehicaleid)
            setIsLoading(false)
            setAttributes(resData)
        })

    }, [])
    

    return (
        <MainBookingLayout>
            <section className="container-fluid">
        <div className="row">
            <section className="col-xs-12 col-sm-12 col-md-8">
                <ImageSlider />
                {/* <HorizontalSlider /> */}
            </section>
            
            <section className="col-xs-12 col-sm-12 col-md-4">
                {
                    isLoading ? <section style={centerSpinner}><Spinner /><h5>Loading...</h5></section> : <MinorDetails isLoading={isLoading} attributes={attributes} />
                }
                
            </section>
            </div>


            <div className="row">
            <section className="col-xs-12 col-sm-12 col-md-8 col-lg-8">
                {
                    isLoading ? <section style={centerSpinner}><Spinner /><h5>Loading...</h5></section> : (<>
                    <FeatureIcons isLoading={isLoading} attributes={attributes} />
                {/* <hr style={{height:'.5rem' , color:'white'}} /> */}
                <Description isLoading={isLoading} attributes={attributes} />
                    </>)
                }
                
                
            </section>
            
                </div>
                </section>
        </MainBookingLayout>
    )
}