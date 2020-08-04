import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Spinner from '../util/spinner'
import Card from './card'


//css
let center = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#eeeeee'
}



//css
let centerSpinner = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '30rem',
    flexDirection: 'column',
    color:'#eeeeee'
}

export default () => {

    const [franchises, setfranchises] = useState([])
    const [isShowing, setisShowing] = useState(false)
    const [isLoading, setisLoading] = useState(false)
    
    useEffect(() => {
        setisLoading(true)

        axios.get('http://localhost:3333/allfranchises')
            .then(res => {
                setfranchises(res.data.data)
                setTimeout(() => {
                    setisLoading(false)
                },1000)
            })
            .catch(err => console.log(err.message))
    },[])

    return (
        <div className="container">
            <h1 className="m-5" style={center}>OUR FRANCHISES</h1>
            <hr style={{backgroundColor:'#fd7014' , height:'1px'}} />
            <div className="row justify-content-around">
            {
                isLoading ? <section style={centerSpinner}><Spinner /><h5>Loading...</h5></section> : (
                franchises.map(item => {
                    return <Card key={item._id} isShowing={isShowing} isLoading={isLoading} setisShowing={setisShowing} franchiseImagePath={item.franchiseImagePath} name={item.franchiseName} description={item.franchiseDescription} latitude={item.franchiseLatitude} altitude={item.franchiseAltitude} />
                }))
            }
            </div>
        </div>
    )
}