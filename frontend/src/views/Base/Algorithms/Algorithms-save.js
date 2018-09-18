import React, { Component } from 'react';
import { Badge, Card, CardBody, CardHeader, Col, Pagination, PaginationItem, PaginationLink, Row, Table } from 'reactstrap';

class Algorithms extends Component {
  render() {
    return (
        <div className="card mb-3">
            <div className="card-header text-center bg-light">
                <span>Key Risk Indicators</span>
            </div>
            <div className="card-body p-0">
              {/*KRI Tabs*/}
                <ul className="nav nav-tabs">
                    <li className="nav-item">
                        <a className="nav-link active" data-toggle="tab" href="#summary">Summary</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" data-toggle="tab" href="#investigations">Investigations</a>
                    </li>
                </ul>
              {/*Tab panes*/}
                <div className="tab-content">
                    <div className="tab-pane active container" id="summary">
                        <div className="d-flex flex-column">
                            <div id="appkri">
                                <div className="d-flex" v-for="kri in kris">
                                    <div className="p-2 flex-grow-1">
                                        kri.name
                                    </div>
                                    <div className="p-2" v-if="kri.alarm == 0"><span
                                        className="badge badge-secondary"> ? </span></div>
                                    <div className="p-2" v-else>&nbsp;</div>
                                    <div className="p-2" v-if="kri.alarm == 1"><span
                                        className="badge badge-success"> kri.value</span></div>
                                    <div className="p-2" v-else>&nbsp;</div>
                                    <div className="p-2" v-if="kri.alarm == 2"><span
                                        className="badge badge-warning text-white"> kri.value</span></div>
                                    <div className="p-2" v-else>&nbsp;</div>
                                    <div className="p-2" v-if="kri.alarm == 3"><span
                                        className="badge badge-danger"> kri.value</span></div>
                                    <div className="p-2" v-else>&nbsp;</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="tab-pane container" id="investigations">
                        <div className="card">
                            <div className="card-body text-center">
                                <i className="fa fa-fw fa-wrench" style="font-size:72px"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
  }
}

export default Algorithms;
