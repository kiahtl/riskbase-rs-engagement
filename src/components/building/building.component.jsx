import { Component } from "react";
import addList from "../list/list.component";
import './building.styles.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBuilding } from '@fortawesome/free-solid-svg-icons'

class Building extends Component {
    render() {
        const { 
            name, full_address, responsible_org, type, height, resident_profile, flat_layout, communal_layout, fire_doors
        } = this.props.building;

        return (
            <div className="building-container" key={name}>
                <div className="building-title">
                    <span className="building-name">{ name }</span>
                    <span className="building-address">{ full_address }</span>
                </div>
                <div className='info-wrapper'>
                    <div className="building-info">  
                        <div className="your-building"> 
                            <FontAwesomeIcon icon={faBuilding} className="building-icon"/>     
                            <h3> Your Building</h3>
                        </div>
                        <div className="info">
                            <h5>Address</h5>
                            <p>{full_address}</p>
                        </div>
                        <div className="info">
                            <h5>Responsible Organisation</h5>
                            <p>{responsible_org}</p>
                        </div>
                        <div className="info">
                            <h5>Type</h5>
                            <p>{type}</p>
                        </div>
                        <div className="info">
                            <h5>Height</h5>
                            <p>{height}</p>
                        </div>
                        <div className="info">
                            <h5>Resident Profile</h5>
                            <p>{resident_profile}</p>
                        </div>
                        <div className="info">
                            <h5>Flat Layout</h5>
                            {addList(flat_layout)}
                        </div>
                        <div className="info">
                            <h5>Communal Layout</h5>
                            {addList(communal_layout)}
                        </div>
                    </div>
                    <div className="building-firedoors">
                        <h5>Fire Doors</h5>
                        <p>View: <a href="">{fire_doors.length}</a></p>
                        <p><a href="https://riskbase.uk/rs/docs/Door-Survey-powered-by-RiskBase.pdf">Fire Door Survey Report</a></p>
                    </div>
                </div>
            </div>
        )
    }

}

export default Building;