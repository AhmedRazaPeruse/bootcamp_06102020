import React from 'react'
import './index.css'

function Car(props){
    return(
        <div> 
            <h2>{props.CarName}</h2>
            {/* <h1>Hi, today we are driving {props.BikeName}</h1> */}
        </div>
    )
}

export default Car