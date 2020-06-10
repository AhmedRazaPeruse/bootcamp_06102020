import React from 'react'
import './index.css'

function Lunch(props){
    return(
        <div>
            <p>Hi, today we are traveling {props.City1} {props.City2}</p>
            {/* <p>Hi, today we are serving {props.Sweet}</p> */}
        </div>
    )
}

export default Lunch