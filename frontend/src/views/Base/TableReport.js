import React, {Component} from 'react';


class TableReport extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="card mb-3">
                <table className="table table-sm table-striped">
                    <thead className="thead-light">
                    <th>Asset-class</th>
                    <th>Dealtype</th>
                    <th>Deals</th>
                    <th>Rogue trading</th>
                    <th>AML</th>
                    <th>Market abuse</th>
                    <th>Unusual activity</th>
                    <th>Effectiveness</th>
                    </thead>
                    <tbody>
                    <tr>
                        <td>commodities</td>
                        <td>futures</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>
                            <a href="http://example.com">
                                123
                            </a>
                        </td>
                    </tr>
                    <tr>
                        <td>commodities</td>
                        <td>option listed</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    </tbody>
                </table>
            </div>

        );
    }
}

export default TableReport;
