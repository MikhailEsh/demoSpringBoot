import React, {Component} from 'react';
import PropTypes from "prop-types";


class RadioButton extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div className="custom-control custom-radio custom-control-inline m-2">
                    <input type="radio" id="showAlerts" name="layerData" className="custom-control-input" checked/>
                        <label className="custom-control-label" htmlFor="showAlerts">Show alerts</label>
                </div>
                <div className="custom-control custom-radio custom-control-inline m-2">
                    <input type="radio" id="showIncidents" name="layerData" className="custom-control-input"/>
                        <label className="custom-control-label" htmlFor="showIncidents">Show incidents</label>
                </div>
            </div>
    );
  }
}

export default RadioButton;
