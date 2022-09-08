import { Component } from "react";
import addList from "../list/list.component";

class Building extends Component {
    render() {
        const { 
            name, full_address, responsible_organisation, type, height, resident_profile, flat_layout, communal_layout, fire_doors
        } = this.props.building;

        return (
            <div className="building-container" key={name}>
                <div>
                    <span>{ name }</span>
                    <span>{ full_address }</span>
                </div>
                <div className='info-wrapper'>
                    <div className="building-info">
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
                        {addList(flat_layout)}
                        <h4>Communal Layout</h4>
                        {addList(communal_layout)}
                    </div>
                    <div className="building-firedoors">
                        <h4>Fire Doors</h4>
                        <p>View: <a href="">{fire_doors.length}</a></p>
                        <p><a href="https://riskbase.uk/rs/docs/Door-Survey-powered-by-RiskBase.pdf">Fire Door Survey Report</a></p>
                    </div>
                </div>
            </div>
        )
    }

}

export default Building;