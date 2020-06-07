import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Menu , MenuItem} from '@material-ui/core';

//icons
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

//router
import { useHistory } from 'react-router-dom'

//sppinner
import CircularProgress from '@material-ui/core/CircularProgress';

//user hook
import useUserProfile from '../../login/profile/userProfileHook'

//redux react
import { connect } from 'react-redux';
import { loggedOutUser } from '../../../actions/authActions'
import { setSpinnerOn , setSpinnerOff } from '../../../actions/toggleActions'
// import { setSpinnerOn } from '../../../actions/toggleActions'

//Mui dark theme
import {
  ThemeProvider,
  createMuiTheme
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      '& > * + *': {
        marginTop: theme.spacing(2),
    },
    },
}));
  
const theme = createMuiTheme({
  palette: {
    type: "light"
  }
});

const MenuAppBar = (props) => {

    let history = useHistory()
    const [ViewProffile] = useUserProfile()

  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);


  const handleMenu = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseProfile = () => {
      setAnchorEl(null);
      ViewProffile()
    };
    
    const handleCloseLogOut = () => {
      props.setSpinnerOn()
      
      setTimeout(() => {
        props.loggedOutUser()
        setAnchorEl(null);
        history.push('/home')
        props.setSpinnerOff()
      } , 2000)
      
    };

  let handleClose2 = () => {
    setAnchorEl(null);
  }

  return (
    <ThemeProvider theme={theme}>
    <div className={classes.root}>
      <div>
              <div
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
          style={{ outline: 'none' }}
        >
          <div style={{ display: 'flex', justifyContent:'center' , cursor:'pointer' , color:'black' }}>
                      <ExpandMoreOutlinedIcon style={{ marginTop: '.3rem' }} />
                      <AccountCircleIcon style={{marginTop: '.1rem' , fontSize:'1.8rem' }} />
            </div>
              </div>
              <Menu
              
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={open}
                onClose={handleClose2}
                // style={{backgroundColor:'#eeeeee'}}
              >{props.spinner}
                <MenuItem  style={{padding:'.5rem 1rem' , color:'black'}} onClick={handleCloseProfile}><PersonOutlineIcon style={{marginRight:'.7rem'}} />My Account</MenuItem>
          <MenuItem onClick={handleCloseLogOut} style={{ padding: '.5rem 1rem' , color:'black' }}>
          {props.spinner && <CircularProgress style={{marginRight:'.7rem' , color:'#fd7014'}} size='1.2rem' />}
                      <ExitToAppIcon style={{marginRight:'.7rem' , color:'black'}} />Logout
                      </MenuItem>
              </Menu>
            </div>
      </div>
      </ThemeProvider>
  );
}

const mapStateToProps = state => ({
  spinner: state.toggle.spinner
})

export default connect(mapStateToProps , {loggedOutUser , setSpinnerOn , setSpinnerOff})(MenuAppBar)