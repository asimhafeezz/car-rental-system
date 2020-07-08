import React from 'react'


//icons
import DriveEtaIcon from '@material-ui/icons/DriveEta';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import AcUnitIcon from '@material-ui/icons/AcUnit';
import WorkOutlineIcon from '@material-ui/icons/WorkOutline';
import MeetingRoomIcon from '@material-ui/icons/MeetingRoom';

//css
let textStyleIconH3 = {
    color: '#eeeeee',
    margin: '1.4rem 0',
    textAlign: 'left'
}

let center = {
    display: 'flex'
}

const Icons = () => {
    return (
        <div className='p-2'>
            <h3 style={textStyleIconH3}>Overview</h3>
            <div className="container vehicaleItemIcons">
            <section style={center}>
                <DriveEtaIcon  className="mr-1" />
                <h6 className="textStyleIcon">4 Wheel Drive</h6>
            </section>
            <section style={center}>
                <WorkOutlineIcon  className="mr-1" />
                <h6 className="textStyleIcon">1 SuitCase</h6>
            </section>
            <section style={center}>
                <AcUnitIcon  className="mr-1" />
                <h6 className="textStyleIcon">Air Conditioning</h6>
            </section>
            <section style={center}>
                <PeopleAltIcon  className="mr-1" />
                <h6 className="textStyleIcon">4 Seats</h6>
                </section>
                <section style={center}>
                <FlashOnIcon  className="mr-1" />
                <h6 className="textStyleIcon">Automatic</h6>
            </section>
            <section style={center}>
                <MeetingRoomIcon  className="mr-1" />
                <h6 className="textStyleIcon">Diesel</h6>
            </section>
            </div>
        </div>
    )
}

export default Icons
