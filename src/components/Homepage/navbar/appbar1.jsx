import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Logo from '../../util/logo'
import Drawer from './drawer'

import LoginButton from './loginButon'
import { connect } from 'react-redux'



import BarComponent from './barComponent'

const useStyles = makeStyles(theme => ({
  root: {
    flex: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title:{
      flex:1
  }
}));





const AppbarComp = (props) => {
  const classes = useStyles();
  

  return (
    <div>
    
    <div className={classes.root}>

      <AppBar position="static" style={{backgroundColor:'white'}}>
        <Toolbar style={{display:'grid' , gridTemplateColumns:"1.1fr 9fr 9fr"}}>
          <div  edge="start"  color="inherit" aria-label="menu">
          <Drawer />
          </div>
          <div className="mr-5"   color="inherit">
            
       <Logo />

          </div>
          <div  style={{justifySelf:"flex-end"}}>
              {
                props.isAuth?
                
                <BarComponent />
                  
                :
                  <LoginButton />
              } 
              {console.log(props.isAuth)}
          </div>
        </Toolbar>
      </AppBar>
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  isAuth: state.auth.isAuthenticated
})

export default connect(mapStateToProps , null)(AppbarComp)