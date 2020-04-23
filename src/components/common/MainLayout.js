import React from 'react'
import Navbar from '../Homepage/navbar/appbar1'
import NavbarFooter2 from '../Homepage/navbarFooter/navbarFooter2'

//boostrap css
import "bootstrap/dist/css/bootstrap.min.css";



//Mui dark theme
import {
    ThemeProvider,
    createMuiTheme
} from "@material-ui/core";
  
//react redux
import { connect } from 'react-redux';
import { alreadyLoggedIn } from '../../actions/authActions'
  const theme = createMuiTheme({
    palette: {
        type: "dark"
    }
  });

const MainLayout = (props) => {

    React.useEffect(() => {
        props.alreadyLoggedIn()
    })

    return (
        
            <ThemeProvider theme={theme}>
            <Navbar />
            { props.children }
            <NavbarFooter2 />
            </ThemeProvider>
    )
}

export default connect(null , {alreadyLoggedIn})(MainLayout)