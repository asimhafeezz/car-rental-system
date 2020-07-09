import React from 'react'
import {Container , Row , Col} from 'react-bootstrap'
import {Link} from 'react-router-dom'

//css
let center = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width:'100%'
}

export default ()=> (
    <div className="homepage-navbarfooter-css">
    <div className='bgcolor'>
    <div className="container">
  <hr style={{height:'1px', border:'none',color:'#333',backgroundColor:'gray'}} />
  <Row className='pb-3 pt-2 small'>
      <Col style={center} xs={4} md={2}><Link to="/contactus"><a className="onHoverNavBarFooter">Contacts</a></Link></Col>
      <Col style={center} xs={4} md={2}><Link href=""><a className="onHoverNavBarFooter">Rental Information</a></Link></Col>
      <Col style={center} xs={4} md={2}><Link href=""><a className="onHoverNavBarFooter">About</a></Link></Col>
      <Col style={center} xs={4} md={2}><Link href=""><a className="onHoverNavBarFooter">T&C</a></Link></Col>
      <Col style={center} xs={4} md={2}><Link href=""><a className="onHoverNavBarFooter">FAQs</a></Link></Col>
      <Col style={center} xs={4} md={2}><Link href=""><a className="onHoverNavBarFooter">P&P</a></Link></Col>
</Row>
</div>
</div>
    </div>
)