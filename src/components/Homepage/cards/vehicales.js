import React , {useState} from 'react'
//css
import '../../util/main.css'
//material ui
import { IconButton } from '@material-ui/core'
//icons
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';

import {Link} from 'react-router-dom'

//productServiceItem
import useProductService from '../../../services/productServices/productService'

let imgDataSet = [
    {id:'1' , imgPath:'/logo512.png' , title:'Cars'},
    {id:'2' , imgPath:'/logo1.png'   , title:'Cars'},
    {id:'2' , imgPath:'/logo512.png' , title:'Jeeps'},
    {id:'3' , imgPath:'/logo512.png' , title:'Cars'},
    {id:'4' , imgPath:'/logo1.png'   , title:'Cars'}
]

//css
let arrowButtonStyle = {
    outline: 'none',
    padding: '.5rem',
    backgroundColor: '#202021',
    marginRight: '.6rem',
    color: 'white',
    cursor: 'pointer'
}

export default () => {
    const [data, setdata] = useState([])
    const [vehicaleImage, setvehicaleImage] = useState('')

    const { advancedsearch } = useProductService()

    React.useEffect(() => {
        const search = {application_ID:150}
        advancedsearch(search).then(resdata => {
          console.log(resdata)
          setdata(resdata)
        //   console.log("data" , data)
        })
      },[])

    let moveVehicaleRight = () => {
        document.getElementById('moveVehicale').scrollLeft += 350;
    }

    let moveVehicaleLeft = () => {
        document.getElementById('moveVehicale').scrollLeft -= 350;
    }
    return (
        <div className="productViewPage p-4 mt-4">
            <section style={{display:'grid' , gridTemplateColumns:'1fr 1fr'}}>
            
                <h4 style={{display:'flex' , fontSize:'1.2rem' , fontWeight:'bold'}}>DON'T DREAM IT DRIVE IT!</h4>
            
            <div style={{display:'flex' , justifyContent:'flex-end'}}>
                <arrowButtons style={arrowButtonStyle} onClick={moveVehicaleLeft}><ChevronLeftIcon /></arrowButtons>
                <arrowButtons style={arrowButtonStyle} onClick={moveVehicaleRight}><ChevronRightIcon /></arrowButtons>
            </div>
            </section>
        <div className="imgView ">
        <div className="HorizontalSlider p-4" style={{display:'flex'}}>
            
            <div className="flex-container" id="moveVehicale">
                    {
                            data.map(item => {
                            return (<Link to={`/productcar/${item.product_ID}`} style={{textDecoration:'none' , color:'#eeeeee'}}>
                                {item.product_NAME === "Car" ?
                                    <section className="mainVehicalebox" key={item.product_ID}>
                                    <img src='/vehicaleImagesStatic/carpng1.png' className="imageVehicalebox" />
                                    <h5 style={{textAlign:'center' , padding:'.5rem' , fontWeight:'bold'}}>{item.product_NAME}</h5>
                                    </section> : ""}
                                    {item.product_NAME === "Jeep" ?
                                    <section className="mainVehicalebox" key={item.product_ID}>
                                    <img src='/vehicaleImagesStatic/jeeppng3.png' className="imageVehicalebox" />
                                    <h5 style={{textAlign:'center' , padding:'.5rem' , fontWeight:'bold'}}>{item.product_NAME}</h5>
                                    </section> : ""}
                                    {/* {item.product_NAME === "Van" ?
                                    <section className="mainVehicalebox" key={item.product_ID}>
                                    <img src='/vehicaleImagesStatic/vanpng1.png' className="imageVehicalebox" />
                                    <h5 style={{textAlign:'center' , padding:'.5rem' , fontWeight:'bold'}}>{item.product_NAME}</h5>
                                    </section> : ""} */}
                                    {item.product_NAME === "Pickup" ?
                                    <section className="mainVehicalebox" key={item.product_ID}>
                                    <img src='/vehicaleImagesStatic/pickuppng2.png' className="imageVehicalebox" />
                                    <h5 style={{textAlign:'center' , padding:'.5rem' , fontWeight:'bold'}}>{item.product_NAME}</h5>
                                    </section> : ""}
                                
                            {/* <section className="mainVehicalebox" key={item.product_ID}>
                            <img src={vehicaleImage} className="imageVehicalebox" />
                            <h5 style={{textAlign:'center' , padding:'.5rem' , fontWeight:'bold'}}>{item.product_NAME}</h5>
                            </section> */}
                            </Link>)
                        })
                    }
                </div>
                </div>
                
                </div>
        </div>
    )
}