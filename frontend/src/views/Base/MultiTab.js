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
                        const isActive = (xMultitab === this.state.activeTab.xMultitab) ? "active": "";
                        return (
                            <li className="nav-item">
                                <a className={"nav-link " + isActive} data-toggle="tab">{xMultitab}</a>
                            </li>)
                    })
                }
            </ul>
        );
  }
}

export default MultiTab;
