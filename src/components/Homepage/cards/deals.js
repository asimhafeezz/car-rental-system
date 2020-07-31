import React, { useState , useEffect } from 'react'
//css
import '../../util/main.css'
//material ui
import { IconButton } from '@material-ui/core'
//icons
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';

// let imgDataSet = [
//     {id:'1' , imgPath:'/vehicaleImagesStatic/jeep3.jpg' , title:'OFFER TITLE' , desc:'this iasdasdasdasdasdasdasdasdasdasdasdasdasds offer discription'},
//     {id:'2' , imgPath:'/vehicaleImagesStatic/cars.jpg' , title:'OFFER TITLE' , desc:'this is offer discription'},
//     {id:'2' , imgPath:'/vehicaleImagesStatic/jeep.jpg' , title:'OFFER TITLE' , desc:'this is offer discription'},
//     {id:'3' , imgPath:'/vehicaleImagesStatic/jeep3.jpg' , title:'OFFER TITLE' , desc:'this is offer discription'},
//     {id:'4' , imgPath:'/vehicaleImagesStatic/cars.jpg'   , title:'OFFER TITLE' , desc:'this is offer discription'},
//     {id:'5' , imgPath:'/vehicaleImagesStatic/jeep3.jpg' , title:'OFFER TITLE' , desc:'this is offer discription'},
//     {id:'5' , imgPath:'/vehicaleImagesStatic/jeep3.jpg' , title:'OFFER TITLE' , desc:'this is offer discription'},
//     {id:'5' , imgPath:'/vehicaleImagesStatic/jeep3.jpg' , title:'OFFER TITLE' , desc:'this is offer discription'},
//     {id:'5' , imgPath:'/vehicaleImagesStatic/jeep3.jpg' , title:'OFFER TITLE' , desc:'this is offer discription'},
//     {id:'5' , imgPath:'/vehicaleImagesStatic/jeep3.jpg' , title:'OFFER TITLE' , desc:'this is offer discription'},
//     {id:'5' , imgPath:'/vehicaleImagesStatic/jeep3.jpg' , title:'OFFER TITLE' , desc:'this is offer discription'},
//     {id:'5' , imgPath:'/vehicaleImagesStatic/jeep3.jpg' , title:'OFFER TITLE' , desc:'this is offer discription'},
//     {id:'5' , imgPath:'/vehicaleImagesStatic/jeep3.jpg' , title:'OFFER TITLE' , desc:'this is offer discription'},
// ]

let [offers , setOffers] = useState([])
let [isLoading, setIsLoading] = useState(true)

useEffect(() => {
    setIsLoading(true)

    axios.get('http://localhost:5000/alloffer')
      .then(res => {
        setOffers(res.data.data)
        setIsLoading(false)
        console.log("offers",res.data.data)
      })
    .catch(err => alert(err.message))
},[])

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

    let moveRight = () => {
        document.getElementById('move').scrollLeft += 350;
    }

    let moveLeft = () => {
        document.getElementById('move').scrollLeft -= 350;
    }
    return isLoading ? <h1>Loading</h1> : (
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
                        return (<section className="mainDealsbox">
                            <img id={item._id} src={item.offerImagePath} className="imageDealbox" />
                            <section style={{display:'flex' , padding:'.5rem' , backgroundColor:'#202021'}}><img alt="percent" src="/vehicaleImagesStatic/per.png" style={{height:'3rem' , marginRight:'1rem' , marginLeft:'.2rem'}} /><div><h6 style={{textAlign:'left'}}>{item.offerLocation}</h6>
                            {/* <p style={{ textAlign: 'left' , fontWeight:'' , letterSpacing:'1' }}>{item.offerDescription.length > 30 ? item.offerDescription.slice(0,30).concat('...') : item.offerDescription}</p> */}
                            </div></section>
                            </section>)
                    })
                }
                </div>
                </div>
                
                </div>
        </div>
    )
}