import React from 'react'
import { connect } from 'react-redux'
import queryString from 'query-string';
import { onLoginComponent } from '../../actions/authActions'
import {useHistory} from 'react-router-dom'
const LoginComponent = (props) => {

    let history = useHistory()

    React.useEffect(() => {
        let params = queryString.parse(props.location.search)
        props.onLoginComponent(params)
        history.push('https://safar.vercel.app/')
    }, [])
    
    return (
        <div>
        </div>
    )
}

const mapStateToProps = state => ({
    isAuth: state.auth.isAuthenticated
})

export default connect(mapStateToProps , { onLoginComponent })(LoginComponent)