import React from 'react'
import {Container , Row , Col} from 'react-bootstrap'
import {Link} from 'react-router-dom'

import '../../util/main.css'

export default ()=> (
    <div className="homepage-navbarfooter-css">
    <div className='bgcolor text-white pt-5 h-50'>
    <Container>
  <hr style={{height:'1px', border:'none',color:'#333',backgroundColor:'white'}} />
  <Row className='pb-3 pt-2 text-white small footernav'>
      <Col xs={4} md={2}><Link href="/contact"><a style={{color: 'white'}}>Contacts</a></Link></Col>
      <Col xs={4} md={2}><Link href=""><a style={{color: 'white'}}>Rental Information</a></Link></Col>
      <Col xs={4} md={2}><Link href=""><a style={{color: 'white'}}>About</a></Link></Col>
      <Col xs={4} md={2}><Link href=""><a style={{color: 'white'}}>T&C</a></Link></Col>
      <Col xs={4} md={2}><Link href=""><a style={{color: 'white'}}>FAQs</a></Link></Col>
      <Col xs={4} md={2}><Link href=""><a style={{color: 'white'}}>P&P</a></Link></Col>
  </Row>
</Container>

</div>
    </div>
)