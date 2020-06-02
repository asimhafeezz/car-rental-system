import React from 'react'
import { Button } from '@material-ui/core'

import { connect } from 'react-redux'
import { loginUser } from '../../../actions/authActions'

const LoginButton = (props) => {

    return (
        <div>
            <Button style={{color:'black'}} onClick={props.loginUser}>LOGIN</Button>
        </div>
    )
}


export default connect(null , {loginUser})(LoginButton)