import React from 'react'
//css
import '../../../util/main.css'
//material ui
import { Button } from '@material-ui/core'
//icons
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';

let imgDataSet = [
    {id:'1' , imgPath:'/logo512.png'},
    {id:'2' , imgPath:'/logo1.png'},
    {id:'2' , imgPath:'/logo512.png'},
    {id:'3' , imgPath:'/logo512.png'},
    {id:'4' , imgPath:'/logo1.png'},
    {id:'5' , imgPath:'/logo512.png'},
    {id:'5' , imgPath:'/logo512.png'},
    {id:'5' , imgPath:'/logo512.png'},
    {id:'5' , imgPath:'/logo512.png'},
    {id:'5' , imgPath:'/logo512.png'},
    {id:'5' , imgPath:'/logo512.png'},
    {id:'5' , imgPath:'/logo512.png'},
    {id:'5' , imgPath:'/logo512.png'},
]

export default () => {

    let moveRight = () => {
        document.getElementById('move').scrollLeft += 50;
    }

    let moveLeft = () => {
        document.getElementById('move').scrollLeft -= 50;
    }
    return (
        <div className="productViewPage">
        <div className="imgView">
        <div className="HorizontalSlider" style={{display:'flex'}}>
            <Button style={{outline:'none' , width:'1rem'}} className="ml-2" size="small" onClick={moveLeft}><ChevronLeftIcon /></Button>
            <div className="flex-container ml-2 mr-2" id="move">
                {
                    imgDataSet.map(item => {
                        return <img id={item.id} src={item.imgPath} className="box" />
                    })
                }
                </div>
                <Button style={{outline:'none'}} className="mr-2" onClick={moveRight}><ChevronRightIcon /></Button>
                </div>
                </div>
        </div>
    )
}