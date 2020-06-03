import React from 'react'
//css
import '../../util/main.css'
//material ui
import { IconButton } from '@material-ui/core'
//icons
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';

let imgDataSet = [
    {id:'1' , imgPath:'/vehicaleImagesStatic/jeep3.jpg' , title:'OFFER TITLE' , desc:'this is offer discription'},
    {id:'2' , imgPath:'/vehicaleImagesStatic/cars.jpg' , title:'OFFER TITLE' , desc:'this is offer discription'},
    {id:'2' , imgPath:'/vehicaleImagesStatic/jeep.jpg' , title:'OFFER TITLE' , desc:'this is offer discription'},
    {id:'3' , imgPath:'/vehicaleImagesStatic/jeep3.jpg' , title:'OFFER TITLE' , desc:'this is offer discription'},
    {id:'4' , imgPath:'/vehicaleImagesStatic/cars.jpg'   , title:'OFFER TITLE' , desc:'this is offer discription'},
    {id:'5' , imgPath:'/vehicaleImagesStatic/jeep3.jpg' , title:'OFFER TITLE' , desc:'this is offer discription'},
    {id:'5' , imgPath:'/vehicaleImagesStatic/jeep3.jpg' , title:'OFFER TITLE' , desc:'this is offer discription'},
    {id:'5' , imgPath:'/vehicaleImagesStatic/jeep3.jpg' , title:'OFFER TITLE' , desc:'this is offer discription'},
    {id:'5' , imgPath:'/vehicaleImagesStatic/jeep3.jpg' , title:'OFFER TITLE' , desc:'this is offer discription'},
    {id:'5' , imgPath:'/vehicaleImagesStatic/jeep3.jpg' , title:'OFFER TITLE' , desc:'this is offer discription'},
    {id:'5' , imgPath:'/vehicaleImagesStatic/jeep3.jpg' , title:'OFFER TITLE' , desc:'this is offer discription'},
    {id:'5' , imgPath:'/vehicaleImagesStatic/jeep3.jpg' , title:'OFFER TITLE' , desc:'this is offer discription'},
    {id:'5' , imgPath:'/vehicaleImagesStatic/jeep3.jpg' , title:'OFFER TITLE' , desc:'this is offer discription'},
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

    let moveRight = () => {
        document.getElementById('move').scrollLeft += 350;
    }

    let moveLeft = () => {
        document.getElementById('move').scrollLeft -= 350;
    }
    return (
        <div className="productViewPage p-4 mt-4">
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
                    imgDataSet.map(item => {
                        return (<section className="mainDealsbox">
                            <img id={item.id} src={item.imgPath} className="imageDealbox" />
                            <h6 style={{textAlign:'left' , marginTop:'.5rem'}}>{item.title}</h6>
                            <p style={{textAlign:'left'}}>{item.desc}</p>
                            </section>)
                    })
                }
                </div>
                </div>
                
                </div>
        </div>
    )
}