import React , {useEffect , useState} from 'react'
import { Button } from '@material-ui/core'
import axios from 'axios'

//icons
import PublishIcon from '@material-ui/icons/Publish';

import Spinner from '../../../util/spinner'

//redux
import { useDispatch } from 'react-redux'
import * as types from '../../../../actions/types'

//react router
import { useHistory } from 'react-router-dom'
//css
let center = {
    display: 'flex',
    justifyContent: 'center',
    alignoffers: 'center',
    letterSpacing: '1px'
}

  //css
  let centerSpinner = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '30rem',
    flexDirection: 'column',
    color:'#eeeeee'
  }

export default (props) => {

    let dispatch = useDispatch()
    let { push } = useHistory()

    let [offer, setOffer] = useState({})
    let [isLoading , setisLoading] = useState(true)
    
    useEffect(() => {
        setisLoading(true)

        axios.get(`http://localhost:3332/offerfindbyid/${props.match.params.offerid}`)
          .then(res => {
            setOffer(res.data.data)
            console.log("offers",res.data.data)
            setTimeout(()=>{
                setisLoading(false)
            },1200)
          })
        .catch(err => alert(err.message))
    }, [])
    
    let onClickHandler = () => {
        dispatch({
            type: types.SET_PICKUP_LOCATION,
            payload: offer.offerLocation
        })
        push('/availablevehicales')
    }

    return (
        <div className="container" style={{textAlign:'center'}}>
            <div className="row container">
            <section className="col-md-12 col-sm-12 mb-2 mt-4"><h1  style={{...center, color:'#fd7014'}}>GRAB THIS SPECIAL OFFER TODAY</h1><hr style={{backgroundColor:'#fd7014' , height:'1px'}} /></section>
            {
                isLoading ? <section className="col-md-12 col-sm-12 mb-2 mt-4" style={centerSpinner}><Spinner /><h5>Loading...</h5></section> : (
                    <><section className="col-md-12 col-sm-12 mt-5"><section style={center} ><img src={`http://localhost:3332/${offer.offerImagePath}`} alt="picture" className="img-fluid" style={{height:'60vh'}} /></section></section>
                    <section className="col-md-12 col-sm-12 ml-3 mb-2 mt-4"><h1  style={{...center, color:'#eeeeee'}}>{offer.offerName}</h1></section>
                    <section className="col-md-12 col-sm-12 m-3"><p style={{ ...center, color: '#eeeeee' }}><>{offer.offerDescription}</></p></section>
                    <section className="col-md-12 col-sm-12 mt-5 mb-5 ml-3" ><section  style={center}><Button color='primary' variant="contained" size="large" onClick={onClickHandler}>Get the Offer <PublishIcon style={{marginLeft:'.5rem' , marginBottom:'.5rem'}} /></Button></section></section></>
                    
                )
            }
            
            
        </div>
        </div>
    )

}