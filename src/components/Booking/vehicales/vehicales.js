import React , {useEffect}  from 'react'
import { Link } from 'react-router-dom'

import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import MainBookingLayout from '../mainBookingLayout'
import CheckIcon from '@material-ui/icons/Check';

//redux
import useUtilActions from '../../../actions/utilActions'

//product item service
import useProductItemService from '../../../services/productServices/productItemService'
import useProductService from '../../../services/productServices/productService'

//filter
import FilterVehicles from './filter2'
import '../../util/main.css'


const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  }
}));


export default function Showallvehicles() {

  const classes = useStyles();
  const [vehicle, setvehicle] = React.useState('');

  const handleChange = (event) => {
    setvehicle(event.target.value);
  };

  //css
  let style = {
    backgroundColor: "#fd7014",
    paddingBottom: "2%",
    paddingTop: "2%"
  }

  const [vehicleTypeList , setvehicleTypeList] = React.useState([])

    

    let { setBookingStepValue } = useUtilActions()
    
  const [vehicaledata , setvehicaledata] = React.useState([])
    
  
  //dynamic list product service
  let { advancedsearch } = useProductService()
  let { advancedSearch } = useProductItemService()

  useEffect(() => {
    setBookingStepValue("bookingStep1")
    let search = {
      application_ID: 150
    }
    //product item
    advancedSearch(search).then(resData => {
      setvehicaledata(resData)
    })
    //product
    advancedsearch(search).then(resData => {
      setvehicleTypeList(resData)
    })
  }, [])
  
  React.useEffect(() => {
    if (vehicle === 'Car') {
      let search = {
        application_ID: 150,
        product_ID: 1
      }
      //product item
      advancedSearch(search).then(resData => {
        setvehicaledata(resData)
      })
    }
    else if (vehicle === 'all') {
      let search = {
        application_ID: 150
      }
      //product item
      advancedSearch(search).then(resData => {
        setvehicaledata(resData)
      })
    }
},[vehicle])

  return (
      <MainBookingLayout>
        
      <div
        className="vehicales"
        style={style}>
        <div>
        <div style={{display:'flex' , borderBottom:'1px solid #202021' , padding:'0rem .5rem 1.2rem .5rem' , marginBottom:'1rem'}}>
        <h6 style={{marginTop:'1rem' , marginRight:'1rem'}}>FILTER BY:</h6>
      <FormControl className={classes.formControl}>
        <Select
          value={vehicle}
          onChange={handleChange}
          displayEmpty
          className={classes.selectEmpty}
          inputProps={{ 'aria-label': 'Without label' }}
        >
          <MenuItem style={{padding:'.5rem 1rem'}} value="" disabled>
            Vehicle Type
          </MenuItem>
          <MenuItem style={{padding:'.5rem 1rem'}} value='all'>All Vehicles</MenuItem>
          {
            vehicleTypeList.map(item =>{
              return <MenuItem style={{padding:'.5rem 1rem'}} key={item.product_ID} value={item.product_NAME}>{item.product_NAME}</MenuItem>
            })
          }
        </Select>
      </FormControl>
    </div>
          

          <h3
            className="pb-2"
            style={{ display: "flex", justifyContent: "center" , fontWeight:'bold'}}
          >
            AVAILABLE VEHICALES
          </h3>
          <div style={{ display: "flex",  flexWrap:'wrap' , justifyContent:'center'}} data-aos="fade-up" data-aos-duration="1500">
            {vehicaledata.map(vitems => {
              return (
                <div style={{ display: "flex",  flexWrap:'wrap' , margin:'2rem'}} className="onHoverVehicaleEffectDiv">
                  <Link to="/vehicale" style={{textDecoration:'none' , color:'black'}}>
                    <div style={{border:'0' , backgroundColor:'transparent'}}>
                    <div style={{width:'17rem'}}><h5 style={{padding:'.3rem' , backgroundColor:'#202021' , color:'white' , letterSpacing:'.1rem' , textTransform: 'uppercase' }}>{vitems.productitem_NAME.length > 15 ? vitems.productitem_NAME.slice(0,15).concat('...') : vitems.productitem_NAME}</h5></div>
                      <img
                      style={{height:'14rem' , width:'17rem'}}
                      className="onHoverVehicaleEffectImage"
                        src={vitems.vpic}
                        alt={vitems.valt}
                      />
                      <div style={{backgroundColor:'#202021' , padding:'.4rem .1rem' , color:'white'}}>
                        <p style={{marginTop:'rem'}}><CheckIcon className="mr-2 pb-1" />incl. unlimited miles</p>
                        <h6 style={{fontSize:'1.2rem' , margin:'0 .3rem' , letterSpacing:'rem'}}>{vitems.price}</h6>
                      </div>
                    </div>
                    </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      </MainBookingLayout>
    );
}

