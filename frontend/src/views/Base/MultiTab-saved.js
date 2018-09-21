import React, {Component} from 'react';
import './ReportPage.css'
import PropTypes from 'prop-types'

class MultiTab extends Component {

    static contextTypes = {
        activeTab: PropTypes.object,
        xMultitabs: Array
    };

    constructor(props) {
        super(props);
        this.state = {
            xMultitabs: props.xMultitabs,
            activeTab: props.activeTab
        };
    }

    render() {
        return (
            <ul className="nav nav-tabs">
                {
                    this.state.xMultitabs.map((xMultitab) => {
                        <li className="nav-item">
                            <a className="nav-link active" data-toggle="tab">Summary</a>
                        </li>
                    })

                    <li className="nav-item">
                    <a className="nav-link" data-toggle="tab">Investigations</a>
                    </li>
                }

            </ul>
        );
  }
}

export default MultiTab;
