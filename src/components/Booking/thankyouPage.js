import React from 'react'

//icons
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import PaymentIcon from '@material-ui/icons/Payment';
import EmojiTransportationIcon from '@material-ui/icons/EmojiTransportation';

const thankyouPage = () => {
    return (
        <div className="container" style={{color:'#eeeeee'}}>
            <div className="m-5">
            <h2 style={{textAlign:'left'}} className="mt-4">Thank You For The Reservation</h2>
            <hr style={{ backgroundColor: '#fd7014', height: '1px' }} />
            <h5 style={{textAlign:'left'}} className="mt-5 mb-4">Your Next Steps</h5>
            <p style={{textAlign:'left'}} className="mt-3"><VpnKeyIcon style={{marginRight:'1rem'}} />Get your keys at the counter *</p>
            <p style={{textAlign:'left'}} className="mt-3"><PaymentIcon style={{ marginRight: '1rem' }} />Bring your documents (ID card, driver's license and payment method) to the counter</p>
            <div className="row">
            <p style={{textAlign:'left' , marginBottom:'6rem'}} className="col-md-6 col-sm-12 mt-5 small">* Please note your reservation expires 60 minutes after the booked pick-up time. In case of delay, please give us a call to extend your reservation.</p>
            </div>
            <h3 style={{marginBottom:'5rem'}}><EmojiTransportationIcon style={{marginRight:'1rem' , fontSize:'2.3rem'}} />Have a Nice Drive!</h3>
            </div>
        </div>
    )
}

export default thankyouPage
