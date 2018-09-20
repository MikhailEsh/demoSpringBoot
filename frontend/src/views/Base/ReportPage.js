import React, {Component} from 'react';
import {Col, Row} from 'reactstrap';
import Algorithms from './Algorithms'


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
            <div className="animated fadeIn">
                <Row>
                    <Col xs="12" lg="4">
                        <Algorithms/>
                    </Col>
                </Row>
            </div>

        );
  }
}

export default ReportPage;
