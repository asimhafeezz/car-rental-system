import React from 'react'
import DriverImageText from '../../ImagesText/allImagesText'
import {Button} from '@material-ui/core'
export default () => {

    let text = {
        DriverTitle: 'Be a Driver',
        DriverText: 'Make great money by driving on schedule & make as much as you can on monthly basis. Only drives when it works for you. There is no office & no boss because you’re in charge with our service.',
        }

    return (
        <div className="container-fluid row pt-3" style={{paddingRight:'0px'}}>
            <section className=" col-sm-12 col-md-6"><img  className="img-fluid" src="/vehicaleImagesStatic/driverImage.jpg" alt="Driver Image" /></section>
            <section className="col-sm-12 col-md-6" style={{margin:'auto'}}><DriverImageText title={text.DriverTitle} para={text.DriverText} /><Button className='rounded-0' size="large" variant="contained" color="primary" style={{color:'#eeeeee'}} >Become a Captain</Button></section>
        </div>
    )
}