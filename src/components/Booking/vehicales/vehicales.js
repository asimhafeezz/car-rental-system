import React  from 'react'
import { Link } from 'react-router-dom'

import MainBookingLayout from '../mainBookingLayout'
import CheckIcon from '@material-ui/icons/Check';

import '../../util/main.css'

export default function Showallvehicles({handlenextstep} ) {
    
  const [vehicaledata , setvehicaledata] = React.useState([
    {key:'1' , vname:"TOYOTA YARIS IA" , price:"200Rs/- | day" , vpic:"/vehicaleImagesStatic/jeep.jpg" , valt:"jeep pic"},
    {key:'2' , vname:"TOYOTA YARIS IA" , price:"200Rs/- | day" , vpic:"/vehicaleImagesStatic/jeep3.jpg" , valt:"jeep pic"},
    {key:'3' , vname:"TOYOTA YARIS IA" , price:"200Rs/- | day" , vpic:"/vehicaleImagesStatic/jeep3.jpg" , valt:"jeep pic"},
    {key:'' , vname:"TOYOTA YARIS IA" , price:"200Rs/- | day" , vpic:"/vehicaleImagesStatic/jeep3.jpg" , valt:"jeep pic"},
    {key:'5' , vname:"TOYOTA YARIS IA" , price:"200Rs/- | day" , vpic:"/vehicaleImagesStatic/jeep3.jpg" , valt:"jeep pic"},
    {key:'6' , vname:"TOYOTA YARIS IA" , price:"200Rs/- | day" , vpic:"/vehicaleImagesStatic/jeep3.jpg" , valt:"jeep pic"},
    {key:'7' , vname:"TOYOTA YARIS IA" , price:"200Rs/- | day" , vpic:"/vehicaleImagesStatic/jeep3.jpg" , valt:"jeep pic"},
    {key:'8' , vname:"TOYOTA YARIS IA" , price:"200Rs/- | day" , vpic:"/vehicaleImagesStatic/jeep3.jpg" , valt:"jeep pic"},
    {key:'9' , vname:"TOYOTA YARIS IA" , price:"200Rs/- | day" , vpic:"/vehicaleImagesStatic/jeep3.jpg" , valt:"jeep pic"},
    {key:'10' , vname:"TOYOTA YARIS IA" , price:"200Rs/- | day" , vpic:"/vehicaleImagesStatic/jeep3.jpg" , valt:"jeep pic"},
    {key:'11' , vname:"TOYOTA YARIS IA" , price:"200Rs/- | day" , vpic:"/vehicaleImagesStatic/jeep3.jpg" , valt:"jeep pic"},
    {key:'12' , vname:"TOYOTA YARIS IA" , price:"200Rs/- | day" , vpic:"/vehicaleImagesStatic/jeep3.jpg" , valt:"jeep pic"},
  ])
    
  let style = {
    backgroundColor: "",
    paddingBottom: "2%",
    paddingTop: "2%"
}


  return (
      <MainBookingLayout>
      <div
        className="vehicales"
        style={style}>
        <div>
          <h3
            className="pb-2"
            style={{ display: "flex", justifyContent: "center" , fontWeight:'bold'}}
          >
            AVAILABLE VEHICALES
          </h3>
          <div style={{ display: "flex",  flexWrap:'wrap' , justifyContent:'center'}}>
            {vehicaledata.map(vitems => {
              return (
                <div style={{ display: "flex",  flexWrap:'wrap' , margin:'2rem'}} className="onHoverVehicaleEffectDiv">
                  <Link to="/vehicale" style={{textDecoration:'none' , color:'black'}}>
                    <div style={{border:'0' , backgroundColor:'transparent'}}>
                    <h5 style={{padding:'.3rem' , backgroundColor:'#565957' , color:'white' , letterSpacing:'.1rem' , textTransform: 'uppercase' }}>{vitems.vname}</h5>
                      <img
                      style={{height:'11rem' , width:'14rem'}}
                      className="onHoverVehicaleEffectImage"
                        src={vitems.vpic}
                        alt={vitems.valt}
                      />
                      <div style={{backgroundColor:'#565957' , padding:'.4rem .1rem' , color:'white'}}>
                        <p style={{marginTop:'rem'}}><CheckIcon className="mr-2 pb-1" />incl. unlimited miles</p>
                        <h6 style={{fontSize:'1.2rem' , margin:'0 .3rem' , letterSpacing:'rem'}}>{vitems.price}</h6>
                      </div>
                    </div>
                    </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      </MainBookingLayout>
    );
}

