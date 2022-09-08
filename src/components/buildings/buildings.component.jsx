import { Component } from "react";

class Buildings extends Component {
    render() {
        return(
            <div>
                <div>
                    <span>Victoria House</span>
                    <span>30 Roland Rd, Guildford, GU23 8VB</span>
                </div>
                <div className='info-wrapper'>
                    <h3>Your Building</h3>
                </div>
            </div>
        )
    }
}

export default Buildings;