import React from 'react'

class Voilet extends React.Component{
    constructor(){
        super();
        this.State = {fontcolor:"Red"};
    }
    render(State){
        return <h2>I am a {this.fontcolor}!</h2>
    }
}

export default Voilet



