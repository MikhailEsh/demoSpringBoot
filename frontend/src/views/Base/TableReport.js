import React, {Component} from 'react';


class TableReport extends Component {

    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            activeTab: '1'
        };
    }

    toggle(tab) {
        if (this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab
            });
        }
    }

    render() {
        return (
            <div className="card mb-3">
                <div class=""></div>
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
                    <tr>
                        <td>commodities</td>
                        <td>option OTC</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>commodities</td>
                        <td>stop/forward</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>commodities</td>
                        <td>swaps</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>fixed income</td>
                        <td>IRS/CIRS</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>fixed income</td>
                        <td>REPO</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>fixed income</td>
                        <td>cash</td>
                        <td>2538</td>
                        <td>1216</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>fixed income</td>
                        <td>fwd</td>
                        <td>25</td>
                        <td>18</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>FX</td>
                        <td>fwd, ndf</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>FX</td>
                        <td>option listed</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>FX</td>
                        <td>option OTC</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>FX</td>
                        <td>swaps</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>FX</td>
                        <td>tod, tom, spot</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>stocks</td>
                        <td>cash</td>
                        <td>2869</td>
                        <td>9</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>stocks</td>
                        <td>ETF</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>stocks</td>
                        <td>futures</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>stocks</td>
                        <td>options listed</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>stocks</td>
                        <td>options OTC</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>stocks</td>
                        <td>REPO</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>-</td>
                        <td><i>Total</i></td>
                        <td>5432</td>
                        <td>1243</td>
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

  //   render() {
  //       return (
  //           <div className="animated fadeIn">
  //               <Card>
  //                   <CardHeader>
  //                       Combined All Table
  //                   </CardHeader>
  //                   <CardBody>
  //                       <Table hover bordered striped responsive size="sm">
  //                           <thead>
  //                           <tr>
  //                               <th>Username</th>
  //                               <th>Date registered</th>
  //                               <th>Role</th>
  //                               <th>Status</th>
  //                           </tr>
  //                           </thead>
  //                           <tbody>
  //                           <tr>
  //                               <td>Vishnu Serghei</td>
  //                               <td>2012/01/01</td>
  //                               <td>Member</td>
  //                               <td>
  //                                   <Badge color="success">Active</Badge>
  //                               </td>
  //                           </tr>
  //                           <tr>
  //                               <td>Zbyněk Phoibos</td>
  //                               <td>2012/02/01</td>
  //                               <td>Staff</td>
  //                               <td>
  //                                   <Badge color="danger">Banned</Badge>
  //                               </td>
  //                           </tr>
  //                           <tr>
  //                               <td>Einar Randall</td>
  //                               <td>2012/02/01</td>
  //                               <td>Admin</td>
  //                               <td>
  //                                   <Badge color="secondary">Inactive</Badge>
  //                               </td>
  //                           </tr>
  //                           <tr>
  //                               <td>Félix Troels</td>
  //                               <td>2012/03/01</td>
  //                               <td>Member</td>
  //                               <td>
  //                                   <Badge color="warning">Pending</Badge>
  //                               </td>
  //                           </tr>
  //                           <tr>
  //                               <td>Aulus Agmundr</td>
  //                               <td>2012/01/21</td>
  //                               <td>Staff</td>
  //                               <td>
  //                                   <Badge color="success">Active</Badge>
  //                               </td>
  //                           </tr>
  //                           </tbody>
  //                       </Table>
  //                   </CardBody>
  //               </Card>
  //           </div>
  //
  //       );
  // }
}

export default TableReport;
