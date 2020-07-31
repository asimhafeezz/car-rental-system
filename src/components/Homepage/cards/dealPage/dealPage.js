import React , {useEffect , useState} from 'react'
import { Button } from '@material-ui/core'
import axios from 'axios'

//icons
import PublishIcon from '@material-ui/icons/Publish';

//css
let center = {
    display: 'flex',
    justifyContent: 'center',
    alignoffers: 'center',
    letterSpacing: '1px'
}

export default (props) => {

    let [offer , setOffer] = useState({})

    useEffect(() => {
        axios.get(`http://localhost:5000/offerfindbyid/${props.match.params.offerid}`)
          .then(res => {
            setOffer(res.data.data)
            console.log("offers",res.data.data)
          })
        .catch(err => alert(err.message))
    },[])

    return (
        <div className="container" style={{textAlign:'center'}}>
            <div className="row container">
            <section className="col-md-12 col-sm-12 mb-2 mt-4"><h1  style={{...center, color:'#fd7014'}}>GRAB THIS SPECIAL OFFER TODAY</h1><hr style={{backgroundColor:'#fd7014' , height:'1px'}} /></section>
            <section className="col-md-12 col-sm-12 mt-5"><section style={center} ><img src={`http://localhost:5000/${offer.offerImagePath}`} alt="picture" className="img-fluid" style={{height:'60vh'}} /></section></section>
            <section className="col-md-12 col-sm-12 ml-3 mb-2 mt-4"><h1  style={{...center, color:'#eeeeee'}}>{offer.offerName}</h1></section>
            <section className="col-md-12 col-sm-12 m-3"><p style={{ ...center, color: '#eeeeee' }}><>{offer.offerDescription}</></p></section>
            <section className="col-md-12 col-sm-12 mt-5 mb-5 ml-3" ><section  style={center}><Button color='primary' variant="contained" size="large">Get the Offer <PublishIcon style={{marginLeft:'.5rem' , marginBottom:'.5rem'}} /></Button></section></section>
            
            
        </div>
        </div>
    )

}