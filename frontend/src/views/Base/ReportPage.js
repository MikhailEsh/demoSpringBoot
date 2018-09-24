import React, {Component} from 'react';
import Algorithms from './Algorithms'
import TableReport from './TableReport'
import Alarm from './Alarm'
import MultiTab from './MultiTab'
import VerticalPills from './VerticalPills'
import RadioButton from './RadioButton'
import './ReportPage.css'
import tables from "./tables";

class ReportPage extends Component {

    constructor(props) {
        super(props);
        const multitab = tables.multitabs.find((element) => {return element.level === 1;})
        this.state = {
            multitab: multitab,
            activeTab: {
                xMultitab: multitab.xMultitabs[0],
                yMultitab: multitab.yMultitabs[0]
            },
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
                <div className="zmultitabs" id="zmultitabs">
                    <RadioButton/>
                </div>
                <div className="xmultitabs" id="xmultitabs">
                    <MultiTab activeTab={this.state.activeTab} xMultitabs={this.state.multitab.xMultitabs}/>
                </div>
                <div className="vertical-pills" id="vertical-pills">
                    <VerticalPills activeTab={this.state.activeTab}  yMultitabs={this.state.multitab.yMultitabs}/>
                </div>
                <div className="alarm" id="alarm">
                    <Alarm/>
                </div>
            </div>

        );
  }
}

export default ReportPage;
