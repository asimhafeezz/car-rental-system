import React from 'react'
//css
import '../../util/main.css'
//material ui
import { IconButton } from '@material-ui/core'
//icons
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';

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
                    imgDataSet.map(item => {
                        return (<section className="mainVehicalebox">
                        <img id={item.id} src={item.imgPath} className="imageVehicalebox" />
                        <h5 style={{textAlign:'center' , padding:'.5rem' , fontWeight:'bold'}}>{item.title}</h5>
                        </section>)
                    })
                }
                </div>
                </div>
                
                </div>
        </div>
    )
}