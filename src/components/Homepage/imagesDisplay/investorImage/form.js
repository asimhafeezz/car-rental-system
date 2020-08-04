import React , {useState} from "react";
import {TextField , Button} from "@material-ui/core";

//axios
import axios from 'axios'

import CircularProgress from '@material-ui/core/CircularProgress';


export default function App({handleClose , setIsEmailSent}) {

    let [isSent , setIsSent] = useState(false)
    
    let [formValues, setFormValues] = useState({
      name: '',
      description: '',
      email: '',
      phoneno: ''
    })

    let onChangeHandler = e => {
        setFormValues({
            ...formValues,
            [e.target.name]:e.target.value
        })
  }

    
    const onFormSubmit = (e) => {
        e.preventDefault()
        setIsSent(true)

        const {name , description, email , phoneno} = formValues
        
        let data = {
            name: name,
            description: description,
            email: email,
            phoneno: phoneno
        }

        axios.post('http://localhost:3331/sendBeaHostEmail', data)
            .then(() => {
            console.log('successfully applied')
            setTimeout(()=>{
                setIsSent(false)
                setIsEmailSent(true)
                handleClose()
            },1200)
            })
            .catch(err => {
            console.log('an error occured' , err.message)
            })
        

    }



  return (
    <form onSubmit={onFormSubmit} className="container">
    <div className="row p-3">
      <section className="col-sm-6 col-md-6 p-2 pt-2 pb-2 ">
      <label>Full Name</label>
      <TextField required name="name" fullWidth type="text" value={formValues.name} onChange={onChangeHandler} variant="outlined" />
      </section>
        <section className="col-sm-12 col-md-6 p-2 pt-2 pb-2 ">
        <label>email</label>
      <TextField required name="email" inputProps={{pattern: "[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}" }} fullWidth type="text" value={formValues.email} onChange={onChangeHandler} variant="outlined" />
      </section>
      <section className="col-sm-12 col-md-16 p-2 pt-2 pb-2 ">
      <label>Phone no.</label>
      <TextField required name="phoneno" inputProps={{pattern: "^[0-9]+$" }} fullWidth type="text" value={formValues.phoneno} onChange={onChangeHandler} variant="outlined" />
      </section>
      <section className="col-sm-12 col-md-12 p-2 pt-2 pb-2 ">
        <label>Why you want to be an invester?</label>
      <TextField required name="description" fullWidth type="text" rows={6} multiline value={formValues.description} onChange={onChangeHandler} variant="outlined" />
      </section>
      <section className="col-sm-12 col-md-6 p-2 pt-2 pb-2 align-items-end ">
  <Button type="submit" variant="contained" color="primary">{isSent ? <CircularProgress className="ml-3 mr-3" style={{color:'#eeeeee'}} size="1.6rem" /> : "APPLY NOW"}</Button>
      </section>
      </div>
    </form>
          
  );
}
