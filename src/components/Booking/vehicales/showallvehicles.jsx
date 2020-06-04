import React  from 'react'
import { Link } from 'react-router-dom'

import MainBookingLayout from '../mainBookingLayout'

export default function Showallvehicles({handlenextstep} ) {
    
  const [vehicaledata , setvehicaledata] = React.useState([
    {key:'1' , vname:"Jeep" , price:"200Rs/- | day" , vpic:"/vehicaleImagesStatic/jeep3.jpg" , valt:"jeep pic"},
    {key:'2' , vname:"Jeep" , price:"200Rs/- | day" , vpic:"/vehicaleImagesStatic/jeep3.jpg" , valt:"jeep pic"},
    {key:'3' , vname:"Jeep" , price:"200Rs/- | day" , vpic:"/vehicaleImagesStatic/jeep3.jpg" , valt:"jeep pic"},
    {key:'' , vname:"Jeep" , price:"200Rs/- | day" , vpic:"/vehicaleImagesStatic/jeep3.jpg" , valt:"jeep pic"},
    {key:'5' , vname:"Jeep" , price:"200Rs/- | day" , vpic:"/vehicaleImagesStatic/jeep3.jpg" , valt:"jeep pic"},
    {key:'6' , vname:"Jeep" , price:"200Rs/- | day" , vpic:"/vehicaleImagesStatic/jeep3.jpg" , valt:"jeep pic"},
    {key:'7' , vname:"Jeep" , price:"200Rs/- | day" , vpic:"/vehicaleImagesStatic/jeep3.jpg" , valt:"jeep pic"},
    {key:'8' , vname:"Jeep" , price:"200Rs/- | day" , vpic:"/vehicaleImagesStatic/jeep3.jpg" , valt:"jeep pic"},
    {key:'9' , vname:"Jeep" , price:"200Rs/- | day" , vpic:"/vehicaleImagesStatic/jeep3.jpg" , valt:"jeep pic"},
    {key:'10' , vname:"Jeep" , price:"200Rs/- | day" , vpic:"/vehicaleImagesStatic/jeep3.jpg" , valt:"jeep pic"},
    {key:'11' , vname:"Jeep" , price:"200Rs/- | day" , vpic:"/vehicaleImagesStatic/jeep3.jpg" , valt:"jeep pic"},
    {key:'12' , vname:"Jeep" , price:"200Rs/- | day" , vpic:"/vehicaleImagesStatic/jeep3.jpg" , valt:"jeep pic"},
  ])
    
  let style = {
    backgroundColor: "#202021",
    paddingBottom: "2%",
    paddingTop: "2%"
}


  return (
      <MainBookingLayout>
      <div
        className="text-white text-center"
        style={style}>
        <div className="container-fluid">
          <h3
            className="pb-2"
            style={{ display: "flex", justifyContent: "center" , fontWeight:'bold' }}
          >
            AVAILABLE VEHICALES
          </h3>
          <div className="row">
            {vehicaledata.map(vitems => {
              return (
                <div className="col-md-4 col-lg-3 mb-4 col-xs-12 shadow-lg">
                  <Link to="/vehicale"><a style={{cursor:'pointer' , color:'blue'}} >
                    <div className="card mx-auto text-center">
                      <img
                        className="card-img-top"
                        src={vitems.vpic}
                        alt={vitems.valt}
                      />
                      <div className="card-body">
                        <h4 className="card-title">
                          <span className="fa fa-external-link mr-1"></span>
                          {vitems.vname}
                        </h4>
                        <p className="card-text">{vitems.price}</p>
                      </div>
                    </div>
                  </a></Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      </MainBookingLayout>
    );
}

