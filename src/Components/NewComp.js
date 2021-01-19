import React, { Component } from 'react'
import bell1 from "./bell1.png"
import bell2 from "./bell2.png"


export class NewComp extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             message : "Subscribe to Ahmed",
             sub : "Subscribe",
             imageURL : bell1 
        };
    }
    Buttonchange = () => {
        this.setState({message : "Hit the Bell icon For Updates" , sub: "Subscribed"})
    }
    Bell = () => {
        this.setState({
            message : "ThankYou",
            imageURL : bell2
        })
    }
    render() {
        return (
            <div>
                <h3>{this.state.message}</h3>
                <button onClick={this.Buttonchange}>{this.state.sub}</button>
                <p/>
                <img style={{width: "30px", height: "30px"}} src={this.state.imageURL} onClick={this.Bell} alt = ""/>
            </div>
        )
    }
}

export default NewComp
