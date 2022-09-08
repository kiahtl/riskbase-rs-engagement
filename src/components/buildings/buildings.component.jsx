import { Component } from "react";
import BuildingsData from '../../data/buildings.json';

class Buildings extends Component {
    constructor() {
        super();
        this.state = {
            buildings: []
        }
    }

    componentDidMount() {
        this.setState(
            () => {
                return{buildings: BuildingsData}
            },
            () => {
                console.log(this.state);
            }
        )
    }

    // could add search function here, displaying only 1 building at present as per design

    render() {
        const { buildings } = this.state;
        return(
            <div>
                {buildings.map(building => {
                    const { 
                        id, name, full_address, responsible_organisation, type, height, resident_profile, flat_layout, communal_layout
                    } = building;
                    console.log(name)
                    return (
                        <div className="building-container" key={id}>
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
                })}
            </div>
        )
    }
}

export default Buildings;