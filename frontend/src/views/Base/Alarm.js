import React, {Component} from 'react';


class Alarm extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <ul className="nav nav-tabs">
                    <li className="nav-item">
                        <a className="nav-link active" data-toggle="tab" href="#summary">Summary</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" data-toggle="tab" href="#investigations">Investigations</a>
                    </li>
                </ul>
                <table className="table table-sm table-striped table-bordered">
                    <thead className="thead-light">
                    <th>Rank</th>
                    <th>Name</th>
                    <th>Priority</th>
                    <th>Status</th>
                    </thead>
                    <tbody>
                    <tr>
                        <td>1</td>
                        <td>Synthetic ETF</td>
                        <td>Urgent</td>
                        <td className="table-danger">Investigate</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Desk B</td>
                        <td>High</td>
                        <td className="table-warning">Monitor</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Desk C</td>
                        <td>High</td>
                        <td className="table-warning">Monitor</td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>Desk D</td>
                        <td>High</td>
                        <td className="table-warning">Monitor</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        );
  }
}

export default Alarm;
