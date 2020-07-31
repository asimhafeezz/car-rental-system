import React from 'react'
import InvestorImageText from '../../ImagesText/allImagesText'
import {Button} from '@material-ui/core'
export default () => {

    let text = {
        InvestorTitle: 'Be an Investor',
        InvestorText: 'Make great money by driving on schedule & make as much as you can on monthly basis. Only drives when it works for you. There is no office & no boss because you’re in charge with our service.',
        }

    return (
        <div className="container-fluid row mt-5 mb-5 investorTextMargin" style={{paddingRight:'0px'}}>
            <section className="col-sm-12 col-md-6 investorTextMargin" style={{ margin: 'auto' }}><InvestorImageText title={text.InvestorTitle} para={text.InvestorText} /><Button className='rounded-0' size="large" variant="contained" color="primary" style={{color:'#eeeeee'}} >Become a Host</Button></section>
            <section className=" col-sm-12 col-md-6"><img className="img-fluid" src="/vehicaleImagesStatic/investorImage.jpg" alt="Driver Image" /></section>
        </div>
    )
}