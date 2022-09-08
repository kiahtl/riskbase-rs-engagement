import { Component } from "react";
import BuildingsData from '../../data/buildings.json';
import Building from "../building/building.component";

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
            }
        )
    }

    // could add search function here, displaying only 1 building at present as per design

    render() {
        const { buildings } = this.state;
        return(
            <div>
                {buildings.map(building => {
                    const { id } = building;
                    return(<Building building={building} key={id}/>)
                })};
            </div>
        )
    }
}

export default Buildings;