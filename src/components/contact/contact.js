import React, { useState } from 'react'
import axios from 'axios'
import { Button, IconButton, TextField } from '@material-ui/core'

//icons
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhoneIcon from '@material-ui/icons/Phone';
import MailIcon from '@material-ui/icons/Mail';
import CircularProgress from '@material-ui/core/CircularProgress';

//Dialouge Box
import EmailDailougeBox from './emailDbox'

export default () => {

    let [isEmailSent , setIsEmailSent] = useState(false)
    let [spin , setSpin] = useState(false)
    
    let [formValues, setFormValues] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    })

    let onChangeHandler = e => {
        setFormValues({
            ...formValues,
            [e.target.name]:e.target.value
        })
    }

    const onFormSubmit = (e) => {
        e.preventDefault()
        const {name , email, subject , message} = formValues
        
        setSpin(true)

    let emailData = {
        name: name,
        email: email,
        subject: subject,
        message: message
    }

    axios.post('http://localhost:5000/send', emailData)
        .then(() => {
            setSpin(false)
            setIsEmailSent(true)
            setFormValues({
                name: '',
                email: '',
                subject: '',
                message: ''
            })
        })
            .catch(err => alert(err('Connection Error!!!')))
        
    console.log(formValues)
        
    }



return(
    <>
    <EmailDailougeBox isEmailSent={isEmailSent} setIsEmailSent={setIsEmailSent} />
    <div className=' container pr-5 pl-5 pt-4 pb-4 mt-5 mb-5' style={{backgroundColor: '#202021'}} >
      <h2 className="h1-responsive font-weight-bold text-center text-white">
        Contact us
      </h2>
      <p className="text-center w-responsive mx-auto pb-5 text-white">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit,
        error amet numquam iure provident voluptate esse quasi, veritatis
        totam voluptas nostrum quisquam eum porro a pariatur veniam.
      </p>
      <div className="row">
        <div className="col-md-9 md-0 mb-5">
          <form method="POST" onSubmit={onFormSubmit}>
            <div className="row">
              <div className="col-md-6 p-3">
                <div className="md-form mb-0">
                  <TextField required name="name" fullWidth type="text" value={formValues.name} onChange={onChangeHandler} label="Enter Your Name" variant="outlined" />
                </div>
              </div>
              <div className="col-md-6 p-3">
                <div className="md-form mb-0">
                  <TextField required name="email" fullWidth
                  value={formValues.email} onChange={onChangeHandler}
                    type="text"
                    id="contact-email"
                    label="Enter your email"
                    variant="outlined"
                    inputProps={{pattern: "[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}" }}
                    // pattern="/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/"
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 p-3">
                <div className="md-form mb-0">
                  <TextField required name="subject" fullWidth type="text" value={formValues.subject} onChange={onChangeHandler} label="Subject" variant="outlined" />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 p-3">
                <div className="md-form mb-0">
                  <TextField 
                  required
                  name="message" fullWidth
                  value={formValues.message} onChange={onChangeHandler}
                    type="textarea"
                    id="contact-message"
                    label="Your message"
                    rows={13}
                    variant="outlined"
                    multiline
                  />
                </div>
              </div>
            </div>
          
          <div className="text-center text-md-left mt-4">
            <Button color="primary" variant='contained' className="text-white" size="large" type="submit" >
              {spin && <CircularProgress style={{color:'white' , marginRight:'.7rem'}} size='1.5rem' />}
              Send
            </Button>
          </div>
          </form>
        </div>
        <div className="col-md-3 text-center text-white">
          <ul className="list-unstyled mb-0">
            <li>
              <IconButton style={{outline:'none'}}><LocationOnIcon style={{color:'#fd7014'}} /></IconButton>
              <p>Islamabad</p>
            </li>
            <li className="mt-5">
            <IconButton style={{outline:'none'}}><PhoneIcon style={{color:'#fd7014'}} /></IconButton>
              <p>+93 3227657483</p>
            </li>
            <li className="mt-5">
            <a href = "mailto: safarcarecenter@gmail.com" style={{textDecoration:'none' , color:'white'}}><IconButton style={{outline:'none'}}><MailIcon style={{color:'#fd7014'}} /></IconButton></a>
              <p>safarcarecenter@gmail.com</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
    </>
)}