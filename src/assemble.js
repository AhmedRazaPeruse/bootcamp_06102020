import React from 'react'

function Model(props){
    return(
        <div>           
            <h1>{props.CarName} company of {props.CompanyName}</h1>
            <h1>{props.CarName} model of {props.YearsName}</h1>
        </div>
    )
}

export default Model