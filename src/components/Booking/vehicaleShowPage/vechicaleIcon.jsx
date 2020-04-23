import React from 'react';

import FlashOnIcon from '@material-ui/icons/FlashOn';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import AcUnitIcon from '@material-ui/icons/AcUnit';
import WorkOutlineIcon from '@material-ui/icons/WorkOutline';

import '../../util/main.css'


export default ()=>{

    return(
        <div className="vehicaleIcon-component-css">
            <div className="icon-flex-container pt-2">
                <div className="vehicalename p-2">
                    <h6 className="pt-1 font-weight-bolder">Vehicale Name</h6>
                </div>
                <div className="icons">
                    <span className="small p-2 pr-3 font-weight-bold"><PeopleAltIcon />4 Seats</span>
                    <span className="small p-2 pr-3 font-weight-bold"><FlashOnIcon />Automatic</span>
                    <span className="small p-2 pr-3 font-weight-bold"><AcUnitIcon />AC</span>
                    <span className="small p-2 pr-3 font-weight-bold"><WorkOutlineIcon />1 SuitCase</span>
                </div>
            </div>
        </div>
    )
}
