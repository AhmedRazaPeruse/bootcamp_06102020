import React from 'react'

function Car(props){
    return(
        <div> 
            <h1>Hi, today we are driving {props.CarName}</h1>
            <h1>Hi, today we are driving {props.BikeName}</h1>
        </div>
    )
}

export default Car