import React, { useState } from 'react'
import { Button } from '@material-ui/core'
//icons
import DriveEtaIcon from '@material-ui/icons/DriveEta';
import FeaturedPlayListIcon from '@material-ui/icons/FeaturedPlayList';

//profile components
import Reservation from './reservations'

//History
import { useHistory } from 'react-router-dom'



//css
//first Section inside Div

let section1Style = {
    display: 'flex',
    flexDirection: 'column',
    borderRight: '.1px solid gray',
    
}

let buttonStyle = {
    padding: '3rem 2.5rem 3rem 2.5rem',
    outline: 'none',
    
}

let h6InsideButtonStyle = {
    marginTop: '.6rem',
    marginLeft: '.4rem',
    fontSize: '.9rem'
}




const Profile =  () => {

    let [reservationTab , setreservationTab] = useState(true)

    let { push } = useHistory()

    return (
        <div className="growRightpanelProfileLayout" style={{backgroundColor:'#202021' , minHeight:'80vh'}}>
            <div className="hideLeftPanelProfileLayout">
            <section  style={section1Style}>
                <Button style={reservationTab ? {...buttonStyle , color: '#fd7014'}: buttonStyle } onClick={()=> setreservationTab(true)}>
                    <div><FeaturedPlayListIcon />
                    <h6 style={h6InsideButtonStyle}>RESERVATIONS</h6></div>
                </Button>
                <Button style={buttonStyle} onClick={()=> push('/home')}>
                    <div><DriveEtaIcon />
                    <h6 style={h6InsideButtonStyle}>book NOW</h6></div>
                </Button>
                </section>
                </div>
            <section className="container">
                {
                    reservationTab ?
                    <Reservation />: null
                }
            </section>
        </div>
    )
}

export default Profile
