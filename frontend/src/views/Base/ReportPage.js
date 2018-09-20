import React, {Component} from 'react';
import {Col, Row} from 'reactstrap';
import Algorithms from './Algorithms'
import TableReport from './TableReport'
import Alarm from './Alarm'
import './ReportPage.css'

class ReportPage extends Component {

    constructor(props) {
        super(props);

        this.state = {
            algorithms: [],
            savedAlgorithms: true
        };
    }

    render() {
        return (
            <div className="animated fadeIn container">
                    <div className="summary" id="summary">
                        <Algorithms/>
                    </div>
                <div className="sections" id="sections">
                    <TableReport/>
                </div>
                <div className="alarm" id="alarm">
                    <Alarm/>
                </div>
            </div>

        );
  }
}

export default ReportPage;
