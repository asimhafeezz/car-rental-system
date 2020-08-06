import React from 'react'
import InvestorImageText from '../../ImagesText/allImagesText'
import { Button } from '@material-ui/core'

import DialougeBox from './dialougebox'
import EmailDBox from './emailDbox'

export default () => {

    const [open, setOpen] = React.useState(false);
    const [ isEmailSent , setIsEmailSent ] = React.useState(false);

    let text = {
        InvestorTitle: 'Be an Investor',
        InvestorText: 'Make great money by driving on schedule & make as much as you can on monthly basis. Only drives when it works for you. There is no office & no boss because you’re in charge with our service.',
        }

    return (
        <div className="container-fluid">
        <EmailDBox  isEmailSent={isEmailSent} setIsEmailSent={setIsEmailSent}  />
        <div className="container-fluid row mt-5 mb-5 investorTextMargin" style={{paddingRight:'0px'}}>
            <section className="col-sm-12 col-md-6 investorTextMargin" style={{ margin: 'auto' }}><InvestorImageText title={text.InvestorTitle} para={text.InvestorText} /><DialougeBox open={open} setOpen={setOpen} setIsEmailSent={setIsEmailSent} /></section>
            <section className=" col-sm-12 col-md-6"><img className="img-fluid" style={{borderRadius:'.5rem'}} src="/vehicaleImagesStatic/investorImage.jpg" alt="Driver Image" /></section>
        </div>
        </div>
    )
}