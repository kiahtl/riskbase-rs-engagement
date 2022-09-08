import { Component } from "react";

class Building extends Component {
    render() {
        const { 
            name, full_address, responsible_organisation, type, height, resident_profile, flat_layout, communal_layout
        } = this.props.building;
        return (
            <div className="building-container">
                <div>
                    <span>{ name }</span>
                    <span>{ full_address }</span>
                </div>
                <div className='info-wrapper'>
                    <h3>Your Building</h3>
                    <h4>Address</h4>
                    <p>{full_address}</p>
                    <h4>Responsible Organisation</h4>
                    <p>{responsible_organisation}</p>
                    <h4>Type</h4>
                    <p>{type}</p>
                    <h4>Height</h4>
                    <p>{height}</p>
                    <h4>Resident Profile</h4>
                    <p>{resident_profile}</p>
                    <h4>Flat Layout</h4>
                    <p>{flat_layout}</p>
                    <h4>Communal Layout</h4>
                    <p>{communal_layout}</p>
                </div>
            </div>
        )
    }

}

export default Building;