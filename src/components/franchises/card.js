import React from 'react'


export default ({ name, description, latitude, altitude, franchiseImagePath, isShowing, setisShowing , isLoading }) => {
    
    return (
                <section className="col-md-6 col-sm-12 p-4">
                <img
                      style={{borderRadius:'.5rem'}}
                      className="img-fluid onHoverVehicaleEffectImage"
                        src={`http://localhost:3333/${franchiseImagePath}`}
                    />
                    <div style={{ color:'#eeeeee' , textAlign:'left'}}>
                        <section style={{display:'flex' , textAlign:'left' , justifyContent:'space-between'}}><h4 style={{marginTop:'1rem' , marginBottom:'1rem' , letterSpacing:'.1rem'}}>{name}</h4></section>
                        {!isShowing && <p style={{letterSpacing:'.1rem' , textAlign:'left'}}>{description}</p>}
                      </div>
                </section>
    )
}