import React, { Component } from 'react';
import { getAlgorithms } from '../../../actions/posts';

class Algorithms extends Component {

    constructor(props) {
        super(props);

        this.state = {
            algorithms: [
                {
                    namealgo: 'Painting Tape',
                    countExec: 4,
                    favorite: false,

                },
                {
                    namealgo: 'Pump&Dump',
                    countExec: 7,
                    favorite: false,

                },
            ],
        };
    }

    loadAlgorithms = (e) => {
        console.log("MISHA")
        getAlgorithms()
        console.log("MISHA1")
    }

    render() {
        this.loadAlgorithms();
        console.log("MISHA2");
        return (
            <div className="col-3">
                {/*Key Risk Indicators*/}
                <div className="card mb-3">
                    <div className="card-header text-center bg-light">
                        <span>Key Risk Indicators</span>
                    </div>
                    <div className="card-body p-0">
                         {/*KRI Tabs */}
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
                                        {
                                            this.state.algorithms.map(function(algorithm) {
                                                console.log(algorithm)
                                                return (
                                                    <div className="d-flex">
                                                        <div key={algorithm.namealgo} className="p-2 flex-grow-1">
                                                            {algorithm.namealgo}
                                                        </div>
                                                    </div>);
                                            })
                                        }
                                    </div>
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
