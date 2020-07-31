import React , {useState , useEffect} from 'react'
//css
import '../../util/main.css'
//material ui
import { IconButton } from '@material-ui/core'
//icons
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';

import axios from 'axios'

//spinner
import Spinner from '../../util/spinner'
import { Link } from 'react-router-dom';

//css
let center = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '25rem',
    flexDirection:'column'
}

let arrowButtonStyle = {
    outline: 'none',
    padding: '.5rem',
    backgroundColor: '#202021',
    marginRight: '.6rem',
    color: 'white',
    cursor: 'pointer'
}

export default () => {

    let [offers , setOffers] = useState([])
    let [isLoading , setIsLoading] = useState(true)

    useEffect(() => {
        setIsLoading(true)

        axios.get('http://localhost:5000/alloffer')
          .then(res => {
            setOffers(res.data.data)
            setTimeout(() => {
                setIsLoading(false)
            },1300)
            console.log("offers",res.data.data)
          })
        .catch(err => alert(err.message))
    },[])

    let moveRight = () => {
        document.getElementById('move').scrollLeft += 450;
    }

    let moveLeft = () => {
        document.getElementById('move').scrollLeft -= 450;
    }
    return isLoading ? <section style={center}><Spinner /><h5>Loading...</h5></section> : (
        <div className="productViewPage p-4 pt-5">
            <section style={{display:'grid' , gridTemplateColumns:'1fr 1fr'}}>
            
                <h4 style={{display:'flex' , fontSize:'1.2rem' , fontWeight:'bold'}}>BEST DEALS:</h4>
            
            <div style={{display:'flex' , justifyContent:'flex-end'}}>
                <arrowButtons style={arrowButtonStyle} onClick={moveLeft}><ChevronLeftIcon /></arrowButtons>
                <arrowButtons style={arrowButtonStyle} onClick={moveRight}><ChevronRightIcon /></arrowButtons>
            </div>
            </section>
        <div className="imgView ">
        <div className="HorizontalSlider p-4" style={{display:'flex'}}>
            
            <div className="flex-container" id="move">
                {
                    offers.map(item => {
                        return (<Link to={`/offer/${item._id}`} style={{textDecoration: 'none' , color:'#eeeeee'}}><section className="mainDealsbox" key={item._id}>
                            <img src={`http://localhost:5000/${item.offerImagePath}`} className="imageDealbox" />
                            <section className="imageDealBoxText" style={{display:'flex' , padding:'.5rem' , backgroundColor:'#202021'}}><img alt="percent" src="/vehicaleImagesStatic/per.png" style={{height:'3rem' , marginRight:'1rem' , marginLeft:'.2rem'}} /><div><h6 style={{textAlign:'left'}}>{item.offerName}</h6>
                            <p style={{ textAlign: 'left' , fontWeight:'' , letterSpacing:'1' }}>{item.offerDescription.length > 30 ? item.offerDescription.slice(0,30).concat('...') : item.offerDescription}</p>
                            </div></section>
                            </section></Link>)
                    })
                }
                </div>
                </div>
                
                </div>
        </div>
    )
}