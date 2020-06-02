import React from 'react'
import {Container , Row , Col} from 'react-bootstrap'
import { Link } from 'react-router-dom'

//icons
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';

import '../../util/main.css'

export default ()=>(
    <div className="homepage-navbarfooter-css">
    <div className='bgcolor text-white pt-5 h-50'>
    <Container>
        
        <div className="small" style={{color:'gray'}}>
        
        <p >Our platform is a online transport providing platform mainly for growing tourism in the Northern areas of Pakistan. It not gives the riding facility but also give the opportunity of earning as a driver especially to the local area people to boost their income. Local residents can share their vehicle on our platform to earn some extra cash from their vehicle when they’re not using it. Our mission is to simplify and improve the lives of tourists & locally people  and build an organization that helps in promoting the beauty of Pakistan.</p>
        <hr style={{backgroundColor:'gray'}}/>
        </div>


        <h3 className="paddingstyle" style={{color:'black'}}>OUR BRAND</h3>
        <p className="paddingstyle small" style={{color:'black'}}>Our platform is a online transport providing platform mainly for growing tourism in the Northern areas of Pakistan. It not gives the riding facility but also give the opportunity of earning as a driver especially to the local area people to boost their income. Local residents can share their vehicle on our platform to earn some extra cash from their vehicle when they’re not using it. Our mission is to simplify and improve the lives of tourists & locally people  and build an organization that helps in promoting the beauty of Pakistan.</p>
 
        <Row className='mt-5 small'>
    <Col xs={6} md={4} className="pl-4">
    <ul>
        <li><b style={{color:'black'}}>BRAND1</b></li>
        <a href="#" style={{color:'black'}} ><li>Item1</li></a>
        <a href="#" style={{color:'black'}} ><li>Item1</li></a>
        <a href="#" style={{color:'black'}} ><li>Item1</li></a>
        <a href="#" style={{color:'black'}} ><li>Item1</li></a>
    </ul>
    </Col>

    <Col xs={6} md={4} className="pl-4">
    <ul>
        <li><b style={{color:'black'}}>BRAND2</b></li>
        <a href="#" style={{color:'black'}} ><li>Item1</li></a>
        <a href="#" style={{color:'black'}} ><li>Item1</li></a>
        <a href="#" style={{color:'black'}} ><li>Item1</li></a>
        <a href="#" style={{color:'black'}} ><li>Item1</li></a>
    </ul>
    </Col>

  </Row>
 
  <Row className='mt-5 small'>
    <Col xs={6} md={4} className="pl-4">
    <ul >
        <li><b style={{color:'black'}}>BRAND1</b></li>
        <a href="#" style={{color:'black'}} ><li>Item1</li></a>
        <a href="#" style={{color:'black'}} ><li>Item1</li></a>
        <a href="#" style={{color:'black'}} ><li>Item1</li></a>
        <a href="#" style={{color:'black'}} ><li>Item1</li></a>
    </ul>
    </Col>

    <Col xs={6} md={4} className="pl-4">
    <ul>
        <li><b style={{color:'black'}}>BRAND2</b></li>
        <a href="#" style={{color:'black'}} ><li>Item1</li></a>
        <a href="#" style={{color:'black'}} ><li>Item1</li></a>
        <a href="#" style={{color:'black'}} ><li>Item1</li></a>
        <a href="#" style={{color:'black'}} ><li>Item1</li></a>
    </ul>
    </Col>

    <Col xs={12} md={4} style={{paddingTop:'3%'}}>
        
    <ul>
    <h6 style={{color:'black'}}>follow us</h6>
    <a to="#" className="text-dark mr-2" ><FacebookIcon /></a>
      <a href="#" style={{color:'black'}} className="text-dark mr-2"><InstagramIcon /></a>
      <a href="#" style={{color:'black'}} className="text-dark mr-2"><TwitterIcon /></a>
      <a href="#" style={{color:'black'}} className="text-dark "><YouTubeIcon /></a>
    </ul>
    </Col>
  </Row>

</Container>

    </div>
    </div>
)