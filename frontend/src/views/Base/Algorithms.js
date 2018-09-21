import React, {Component} from 'react';
import {Badge, Button, Card, CardBody, CardHeader, Col, Row, Table} from 'reactstrap';
import {AppSwitch} from '@coreui/react'
import setting from '../../settings';
import update from 'react-addons-update';


class Algorithms extends Component {

    constructor(props) {
        super(props);

        this.state = {
            algorithms: []
        };
    }

    loadAlgorithms() {
        const bodyAlgo = {
            method: 'GET',
            headers: { 'Content-Type': 'application/xMultitab-www-form-urlencoded' },
            credentials: 'include'
        };
        fetch('http://localhost:8000/api/algorithms', bodyAlgo)
            .then(response => {
                const jsonResp = response.json().then(data => {
                    let mapData = new Map();
                    data.forEach(function(item, i, arr) {
                        mapData.set(item.namealgo, item);
                    });
                    this.setState((state) => {
                        return {algorithms: mapData};
                    })
                });
            })
            .catch(err => console.error('Error: ', err));
    }

    updateStateAlgorithms(namealgo) {
        const newAlgorithms = this.state.algorithms;
        newAlgorithms.get(namealgo).favorite = !newAlgorithms.get(namealgo).favorite;
        this.forceUpdate()
    }

    saveAlgorithms() {
        const values = Array.from(this.state.algorithms.values());
        const bodyAlgo = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            credentials: 'include',
            body: JSON.stringify(values)
        };
        fetch(setting.host + '/algorithms', bodyAlgo)
            .then(response => {
                console.log(response.status);
            })
            .catch(err => console.error('Error: ', err));
    }

    getSortedValues() {
        const values = Array.from(this.state.algorithms.values());
        return values.sort(function (a, b) {
            if (a.favorite) return -1;
            if (b.favorite) return 1;
            return 0;
        });
    }

    static getColorButton(count) {
        if (count < 3) {
            return "success"
        } else if (3 <= count &&  count <= 7) {
            return "warning"
        } else if (count > 7) {
            return "danger"
        }
    }

    componentDidMount () {
        console.log(setting.host);
        this.loadAlgorithms();
    }

    renderFavorite() {
        const sortedValues = this.getSortedValues();
        return (
            <tbody>
            {
                sortedValues.map((algorithm) => {
                    const colorBtn = Algorithms.getColorButton(algorithm.countrun);
                    return (
                        <tr>
                            <td key={algorithm.namealgo + 'name'}>{algorithm.namealgo}</td>
                            <td key={algorithm.namealgo + 'switch'}>
                                <AppSwitch
                                    label
                                    color={'info'}
                                    onChange={
                                        () => {
                                            this.updateStateAlgorithms(algorithm.namealgo);
                                        }
                                    }
                                    defaultChecked={algorithm.favorite}
                                    size={'sm'}/>
                            </td>
                            <td key={algorithm.namealgo + 'badge'}>
                                <Badge color={colorBtn}>{algorithm.countrun}</Badge>
                            </td>
                        </tr>)
                })
            }
            </tbody>
        )
    }

    render() {
        return (
            <div className="animated fadeIn">
                <div className="card mb-3">
                    <table className="table table-sm table-striped">
                        <thead className="thead-light">
                        <th key='Username'>Username</th>
                        <th key='Favorite'>
                            <Button
                                active
                                block
                                color="secondary"
                                onClick={() => {this.saveAlgorithms();}}
                                aria-pressed="true">Favorite</Button>
                        </th>
                        <th key='Status'>Status</th>
                        </thead>
                        {this.renderFavorite()}
                    </table>
                </div>
            </div>

        );
  }
}

export default Algorithms;
