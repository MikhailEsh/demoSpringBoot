import React, {Component} from 'react';
import {Badge, Button, Card, CardBody, CardHeader, Col, Row, Table} from 'reactstrap';
import {AppSwitch} from '@coreui/react'


class Algorithms extends Component {

    constructor(props) {
        super(props);

        this.state = {
            algorithms: [],
            savedAlgorithms: true
        };
    }

    loadAlgorithms() {
        const bodyAlgo = {
            method: 'GET',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
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

    updateStateAlgorithms(algorithm) {
        const oldAlgoFavor = this.state.algorithms.get(algorithm.namealgo).favorite;
        this.state.algorithms.get(algorithm.namealgo).favorite = !oldAlgoFavor;
        console.log(this.state.algorithms.get(algorithm.namealgo).favorite);
    }

    updateAlgorithms() {
        const bodyAlgo = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            credentials: 'include'
        };
        fetch('http://localhost:8000/api/algorithms', bodyAlgo)
            .then(response => {
                const jsonResp = response.json().then(data => {
                    this.setState({
                        algorithms: data
                    })
                });
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
        this.loadAlgorithms();
    }

    renderFavorite() {
        const sortedValues = this.getSortedValues();
        return (
            <tbody>
            {
                sortedValues.map(function(algorithm) {
                    const colorBtn = Algorithms.getColorButton(algorithm.countrun);
                    return (
                        <tr>
                            <td>{algorithm.namealgo}</td>
                            <td>
                                <AppSwitch
                                    // className={'float-right mb-0'}
                                    label
                                    color={'info'}
                                    onChange={
                                        function() {
                                            console.log({algorithm})
                                        }
                                    }
                                    defaultChecked={algorithm.favorite}
                                    size={'sm'}/>
                            </td>
                            <td>
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
                        <th>Username</th>
                        <th>Favorite</th>
                        <th>Status</th>
                        </thead>
                        {this.renderFavorite()}
                    </table>
                </div>
            </div>

        );
  }
}

export default Algorithms;
