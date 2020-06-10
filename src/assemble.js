import React from 'react'
import './index.css'

function Model(props){
    return(
        <div>           
            <h3>{props.CarName} company of {props.CompanyName}</h3>
            <h3>{props.CarName} model of {props.YearsName}</h3>
        </div>
    )
}

export default Model