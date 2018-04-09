import React, { Component } from 'react';
import {FlatButton} from "material-ui";
import './theme/style.css';

import FilterForm from "./components/FilterForm";
import StationChart from "./components/StationsChart";
import WeatherBicycleUsage from "./components/WeatherBicycleUsage";

export default class Dashboard extends Component {

    constructor() {
        super();
        this.state = {
            area: "London",
            station: "AllStations",
            openFilter: true,
        }
    }

    _handleAreaChange = (event, index, area) => this.setState({ area });
    _handleStationChange = (event, index, station) => this.setState({ station });
    _openFilterHandler = (openFilter) => this.setState({ openFilter: !openFilter });

    render() {
        const { area, station, openFilter } = this.state;
        return (
            <div className="dashboard-container">
                <FlatButton
                    onClick={this._openFilterHandler.bind(this, openFilter)}
                    label="Filters"
                    fullWidth={true}
                    style={{ borderRadius: 0, color: '#ffffff', paddingLeft: 15 }}
                    backgroundColor="#233672"
                    rippleColor="#233672"
                    hoverColor="#233672"
                    className="filter-form-button"
                />
                <div className={ !!openFilter ? "active-filter" : "inactive-filter"}>
                    {
                        !!openFilter ?
                            <FilterForm
                                area={{
                                    default: area, item: [],
                                    onChangeHandler: this._handleAreaChange.bind(this)
                                }}
                                station={{
                                    default: station, item: [],
                                    onChangeHandler: this._handleStationChange.bind(this)
                                }}
                            />
                            :
                            null
                    }
                </div>
                <div className="row">
                    <div className="col-sm-12 col-md-12 col-lg-6 chart-container">
                        <StationChart chartHeight={(window.innerHeight / 2) - 100} paperStyle={{ height: window.innerHeight / 2 }}/>
                        <WeatherBicycleUsage chartHeight={(window.innerHeight / 2) - 100} paperStyle={{ height: window.innerHeight / 2}} />
                    </div>
                    <div className="col-sm-12 col-md-12 col-lg-6 dashboard-map-container">
                    </div>
                </div>
            </div>
        )
    }
}