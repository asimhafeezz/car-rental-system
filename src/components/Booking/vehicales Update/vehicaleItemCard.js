import React, { useEffect }from 'react'
import { Link } from 'react-router-dom'

import CheckIcon from '@material-ui/icons/Check';

//redux
import useProuctItemActions from '../../../actions/productItemActions'




const VehicaleItemCard = ({ product_item_id , productitemid, productitemImagePath , productitem_DESC , productitem_NAME, imgSrc, price , vehicalePrice}) => {
  
  let { setProductItemValues } = useProuctItemActions()

  useEffect(() => {
    console.log(typeof productitemid)
  },[])

  let onClickHandler = () => {
    setProductItemValues(productitem_NAME, productitem_DESC , productitemImagePath)
  }

    return(
        <>
            <div style={{ display: "flex",  flexWrap:'wrap' , margin:'1.5rem 1.5rem 2.5rem 1.5rem'}} className={'onHoverVehicaleEffectDiv'}>
              <section className={product_item_id == productitemid ? 'onHoverVehicaleEffectDivOnMatchingID' : null}>
                  <Link to={`/updateVehicleShow/${productitemid}`} onClick={onClickHandler} style={{textDecoration:'none' , color:'black'}}>
                    <div style={{border:'0' , backgroundColor:`${product_item_id === productitemid ? '#eeeeee' : '#202021'}` , borderRadius:'.5rem' , boxShadow:  '5px 10px 10px #79360a'}}>
                    <div style={{width:'18rem'}} className="vehicleNameDiv" ><h5 style={{padding:'.5rem' , color:'white' , letterSpacing:'.1rem' , textTransform: 'uppercase' , margin:'0px' , display: "flex", justifyContent:'center' }}>{productitem_NAME.length > 15 ? productitem_NAME.slice(0,15).concat('...') : productitem_NAME}</h5></div>
                      <img
                      style={{height:'14rem' , width:'17rem' , margin:'.5rem' , borderRadius:'.5rem'}}
                      className="onHoverVehicaleEffectImage"
                        src={productitemImagePath === null ? '' : `http://localhost:3335/${productitemImagePath}`}
                      />
                      <div style={{padding:'.4rem .1rem' , color:'white' , textAlign:'center'}}>
                        <p style={{marginTop:'rem'}}><CheckIcon className="mr-2 pb-1" />incl. unlimited miles</p>
                        <h6 style={{fontSize:'1.5rem' , margin:'0 .3rem' , letterSpacing:'rem', color:'#fd7014'}}>{Math.floor(Math.random() * 7000) + 2000} Rs</h6>
                      </div>
                    </div>
                    </Link>
                    </section>
                </div>
        </>
    )
}

export default VehicaleItemCard
