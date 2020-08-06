import React , {useEffect} from 'react'


//icons
import DriveEtaIcon from '@material-ui/icons/DriveEta';
import AcUnitIcon from '@material-ui/icons/AcUnit'
import SpeakerIcon from '@material-ui/icons/Speaker';
import SettingsInputComponentIcon from '@material-ui/icons/SettingsInputComponent';
import UsbIcon from '@material-ui/icons/Usb';
import RadioIcon from '@material-ui/icons/Radio';
import BluetoothIcon from '@material-ui/icons/Bluetooth';
import AudiotrackIcon from '@material-ui/icons/Audiotrack';



//css
let textStyleIconH3 = {
    color: '#eeeeee',
    margin: '1.4rem 0',
    textAlign: 'left'
}

let center = {
    display: 'flex'
}



const Icons = ({ attributes}) => {
    
    useEffect(() => {
        console.log('icons attributes'  , attributes)
    },[])

    return (
        <div className='p-2'>
            <h3 style={textStyleIconH3}>Overview</h3>
            <div className="container vehicaleItemIcons">
                {
                    attributes.map(item => {
                        return <>
                            {item.productattribute_ID.productattribute_NAME === '4-Wheel drive' && item.productattributevalue_ID.productattribute_VALUE === 'YES' && <section style={center}><DriveEtaIcon style={{color:'#fd7014'}} className="mr-1" /><h6 className="textStyleIcon">4 Wheel Drive</h6></section>}
                            {item.productattribute_ID.productattribute_NAME === 'Speakers' && item.productattributevalue_ID.productattribute_VALUE === 'YES' && <section style={center}><SpeakerIcon style={{color:'#fd7014'}} className="mr-1" /><h6 className="textStyleIcon">Speakers</h6></section>}
                            {item.productattribute_ID.productattribute_NAME === 'AUX Compatible' && item.productattributevalue_ID.productattribute_VALUE === 'YES' && <section style={center}><SettingsInputComponentIcon style={{color:'#fd7014'}} className="mr-1" /><h6 className="textStyleIcon">AUX Compatible</h6></section>}
                            {item.productattribute_ID.productattribute_NAME === 'USB Compatible' && item.productattributevalue_ID.productattribute_VALUE === 'YES' && <section style={center}><UsbIcon style={{color:'#fd7014'}} className="mr-1" /><h6 className="textStyleIcon">USB Compatible</h6></section>}
                            {item.productattribute_ID.productattribute_NAME === 'MPS Playback' && item.productattributevalue_ID.productattribute_VALUE === 'YES' && <section style={center}><AudiotrackIcon style={{color:'#fd7014'}} className="mr-1" /><h6 className="textStyleIcon">MP3 Playback</h6></section>}
                            {item.productattribute_ID.productattribute_NAME === 'Bluetooth' && item.productattributevalue_ID.productattribute_VALUE === 'YES' && <section style={center}><BluetoothIcon style={{color:'#fd7014'}} className="mr-1" /><h6 className="textStyleIcon">Bluetooth</h6></section>}
                            {item.productattribute_ID.productattribute_NAME === 'FM Radio' && item.productattributevalue_ID.productattribute_VALUE === 'YES' && <section style={center}><RadioIcon style={{color:'#fd7014'}} className="mr-1" /><h6 className="textStyleIcon">FM Radio</h6></section>}
                            {item.productattribute_ID.productattribute_NAME === 'Air Conditionar' && item.productattributevalue_ID.productattribute_VALUE === 'YES' && <section style={center}><AcUnitIcon style={{color:'#fd7014'}} className="mr-1" /><h6 className="textStyleIcon">Air Conditionar</h6></section>}
                        </>
                    })
                }
            </div>
        </div>
    )
}

export default Icons
