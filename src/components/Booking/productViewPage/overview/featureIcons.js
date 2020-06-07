import React from 'react'

//icons
import DriveEtaIcon from '@material-ui/icons/DriveEta';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import AcUnitIcon from '@material-ui/icons/AcUnit';
import WorkOutlineIcon from '@material-ui/icons/WorkOutline';
import MeetingRoomIcon from '@material-ui/icons/MeetingRoom';
//css
let flexStyle = {
    display: 'flex',
}

let textStyle = {
    color: '#eeeeee',
    marginTop:1
}

export default () => {
    return (
        <div className="p-2 mt-5" style={{color: '#eeeeee' , display:'flex'  , flexDirection:'column' , justifyContent:'start'}}>
            <h3>Overview</h3>
            <div style={{display:'flex' , flexWrap:'wrap' ,  justifyContent:'space-around' , alignItems:'start'}}>
            <section className="p-2" style={flexStyle}>
                <DriveEtaIcon  className="mr-1" />
                <h6 style={textStyle}>4 Wheel Drive</h6>
            </section>
            <section className="p-2 " style={flexStyle}>
                <WorkOutlineIcon  className="mr-1" />
                <h6 style={textStyle}>1 SuitCase</h6>
            </section>
            <section className="p-2" style={flexStyle}>
                <AcUnitIcon  className="mr-1" />
                <h6 style={textStyle}>Air Conditioning</h6>
            </section>
            <section className="p-2" style={flexStyle}>
                <PeopleAltIcon  className="mr-1" />
                <h6 style={textStyle}>4 Seats</h6>
                </section>
                <section className="p-2" style={flexStyle}>
                <FlashOnIcon  className="mr-1" />
                <h6 style={textStyle}>Automatic</h6>
            </section>
            <section className="p-2" style={flexStyle}>
                <MeetingRoomIcon  className="mr-1" />
                <h6 style={textStyle}>Diesel</h6>
            </section>
            </div>
        </div>
    )
}