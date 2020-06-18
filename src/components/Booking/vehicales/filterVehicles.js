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

//useproduct service
import useProductService from '../../../services/productServices/productService'

const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      '& > * + *': {
        marginTop: theme.spacing(2),
    },
    },
}));
  




const MenuAppBar = (props) => {

    const [filterbyList , setfilterbyList] = React.useState([])

    //dynamic list product service
    let { advancedSearch } = useProductService()

    React.useEffect(() => {
    let search = {
      application_ID: 150
    }
    // advancedSearch(search).then(resData => {
    //     setfilterbyList(resData)
    // })
  },[])

    let history = useHistory()
    const [ViewProffile] = useUserProfile()

  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);


  const handleMenu = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
      setAnchorEl(null);
    };
    

  let handleClose2 = () => {
    setAnchorEl(null);
  }

  return (
    <div className={classes.root}>
      <div>
              <div
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
          style={{ outline: 'none' }}
        >
          <div style={{ display: 'flex', cursor:'pointer' , color:'black' }}>
                      <ExpandMoreOutlinedIcon style={{ marginTop: '.3rem' }} />
                      <AccountCircleIcon style={{marginTop: '.1rem' , fontSize:'1.8rem' }} />
            </div>
              </div>
              <Menu
              
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
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
                {
              filterbyList.map(item => {
                  return <MenuItem onClick={handleClose} style={{ padding: '.5rem 3rem' }}>{item.product_NAME}</MenuItem>
              })
          }
                  
              </Menu>
            </div>
      </div>
  );
}

const mapStateToProps = state => ({
  spinner: state.toggle.spinner
})

export default connect(mapStateToProps , {loggedOutUser , setSpinnerOn , setSpinnerOff})(MenuAppBar)