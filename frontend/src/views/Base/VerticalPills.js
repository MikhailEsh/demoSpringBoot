import React, {Component} from 'react';
import PropTypes from "prop-types";


class VerticalPills extends Component {

    static contextTypes = {
        activeTab: PropTypes.object,
        yMultitabs: Array
    };

    constructor(props) {
        super(props);
        this.state = {
            yMultitabs: props.yMultitabs,
            activeTab: props.activeTab
        };
    }

    render() {
        return (
            <div className="card mb-3">
                <div className="card-header text-center bg-light">Layers</div>
                <div className="card-body p-0">
                    <table className="table table-sm table-striped table-striped">
                        <tbody>
                            {
                                this.state.yMultitabs.map((yMultitab) => {
                                    const checked = (yMultitab === this.state.activeTab.yMultitab);
                                    return (
                                        <tr>
                                            <td>
                                                <div className="custom-control custom-radio custom-control-inline">
                                                    <input type="radio" id="layerAssetClass" name="layers"
                                                           className="custom-control-input" checked={checked}/>
                                                    <label className="custom-control-label" htmlFor="layerAssetClass">{yMultitab}</label>
                                                </div>
                                            </td>
                                            <td>2</td>
                                        </tr>)
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
    );
  }
}

export default VerticalPills;
