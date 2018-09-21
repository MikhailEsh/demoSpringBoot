import React, {Component} from 'react';


class VerticalPills extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="card mb-3">
                <div className="card-header text-center bg-light">Layers</div>
                <div className="card-body p-0">
                    <table className="table table-sm table-striped table-striped">
                        <tbody>
                            <tr>
                                <td>
                                    <div className="custom-control custom-radio custom-control-inline">
                                        <input type="radio" id="layerAssetClass" name="layers"
                                               className="custom-control-input" checked/>
                                            <label className="custom-control-label" htmlFor="layerAssetClass">Asset class</label>
                                    </div>
                                </td>
                                <td>2</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
    );
  }
}

export default VerticalPills;
