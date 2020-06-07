import React from 'react'
import { Button } from '@material-ui/core'
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import { connect } from 'react-redux'
import { loginUser } from '../../../actions/authActions'

const LoginButton = (props) => {

    return (
        <div>
            <Button style={{color:'black' , outline:'none'}} className="onLoginButtonHover" onClick={props.loginUser}>LOGIN<AccountCircleOutlinedIcon style={{fontSize:'2rem' , marginLeft:'.5rem'}} /></Button>
        </div>
    )
}


export default connect(null , {loginUser})(LoginButton)