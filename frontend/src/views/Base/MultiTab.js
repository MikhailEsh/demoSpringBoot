import React, {Component} from 'react';
import {Col, Row} from 'reactstrap';
import Algorithms from './Algorithms'
import TableReport from './TableReport'
import Alarm from './Alarm'
import './ReportPage.css'

class MultiTab extends Component {

    constructor(props) {
        super(props);

        this.state = {
            algorithms: [],
            savedAlgorithms: true
        };
    }

    render() {
        return (
            <ul className="nav nav-tabs">
                <li className="nav-item">
                    <a className="nav-link active" data-toggle="tab">Summary</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" data-toggle="tab">Investigations</a>
                </li>
            </ul>
        );
  }
}

export default MultiTab;
