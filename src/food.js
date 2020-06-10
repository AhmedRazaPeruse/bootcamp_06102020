import React from 'react'

function Lunch(props){
    return(
        <div>
            <h1>Hi, today we are serving {props.Dish}</h1>
            <h1>Hi, today we are serving {props.Sweet}</h1>
        </div>
    )
}

export default Lunch