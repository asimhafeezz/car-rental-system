import React from 'react'
import {Container , Row , Col} from 'react-bootstrap'
import {Link} from 'react-router-dom'

import '../../util/main.css'

export default ()=> (
    <div className="homepage-navbarfooter-css">
    <div className='bgcolor pt-5 h-50'>
    <Container>
  <hr style={{height:'1px', border:'none',color:'#333',backgroundColor:'black'}} />
  <Row className='pb-3 pt-2 small'>
      <Col xs={4} md={2}><Link href="/contact"><a style={{color:'black'}}>Contacts</a></Link></Col>
      <Col xs={4} md={2}><Link href=""><a style={{color:'black'}}>Rental Information</a></Link></Col>
      <Col xs={4} md={2}><Link href=""><a style={{color:'black'}}>About</a></Link></Col>
      <Col xs={4} md={2}><Link href=""><a style={{color:'black'}}>T&C</a></Link></Col>
      <Col xs={4} md={2}><Link href=""><a style={{color:'black'}}>FAQs</a></Link></Col>
      <Col xs={4} md={2}><Link href=""><a style={{color:'black'}}>P&P</a></Link></Col>
  </Row>
</Container>

</div>
    </div>
)